from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from flask_migrate import Migrate
from flask_jwt_extended import (
    JWTManager,
    set_access_cookies,
    unset_jwt_cookies,
    get_jwt,
    get_jwt_identity
)
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone

from app.config import Config
from app.models.base_model import db
from app.models.user import User
from app.models.team import Team
from app.models.project import Project
from app.models.ticket import Ticket
from app.models.comment import Comment
from app.api.auth import auth_ns
from app.api.user import user_ns
from app.api.team import team_ns
from app.api.project import project_ns
from app.api.ticket import ticket_ns
from app.api.comment import comment_ns

load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)

CORS(app, resources={r"/api/*": {"origins": "*"}})

api = Api(
    app,
    prefix='/api',
    title='Bug Tracker API',
    version='1.0',
    doc='/doc')

db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

api.add_namespace(auth_ns)
api.add_namespace(user_ns)
api.add_namespace(project_ns)
api.add_namespace(ticket_ns)
api.add_namespace(comment_ns)
api.add_namespace(team_ns)


@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).first()


# implict token refresh
@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=10))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original
        # response
        return response


@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db, User=User, Project=Project,
                Ticket=Ticket, Team=Team, Comment=Comment)


#if __name__ == '__main__':
#    app.run()
