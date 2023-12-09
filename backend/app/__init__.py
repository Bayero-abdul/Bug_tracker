from flask import Flask
from flask_restx import Api
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from app.config import Config


load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)
print(Config.SQLALCHEMY_DATABASE_URI)

api = Api(app, title='Bug Tracker API', version='1.0', doc='/doc')

jwt = JWTManager(app)
db = SQLAlchemy(app)

from app import api, models
