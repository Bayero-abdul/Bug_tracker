from flask import jsonify, request
from flask_restx import Resource, Namespace, fields, marshal_with
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity,
    current_user,
    set_access_cookies,
    unset_jwt_cookies
)
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import User, db, UserRole


auth_ns = Namespace("auth", description='Authentication operations')

registration_model = auth_ns.model('Registration', {
    'fullname': fields.String(required=True, description='User full name', default=""),
    'email': fields.String(required=True, description='User email address', default=""),
    'password': fields.String(required=True, description='User password', default=""),
    'role': fields.String(readonly=True, description='User role (admin/developer)', default=UserRole.DEVELOPER.value),

})

login_model = auth_ns.model('Login', {
    'email': fields.String(required=True, description='User email address', default=""),
    'password': fields.String(required=True, description='User password', default=""),
})


@auth_ns.route('/register')
class Registration(Resource):
    @auth_ns.expect(registration_model)
    def post(self):
        data = request.get_json()

        email = data.get("email")
        user = User.query.filter_by(email=email).first()
        if user is not None:
            return {"message": f"User with email {email} already exists"}, 400
 
        hashed_password = generate_password_hash(
            data['password'], method='scrypt')

        data["password"] = hashed_password
        new_user = User(**data)
        new_user.save()
        return {'message': f'{new_user} registerd successfully'}


@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data = request.get_json()

        email = data.get("email")
        user = User.query.filter_by(email=email).first()

        if user and check_password_hash(
                user.password, data['password']):
            response = jsonify({"message": "login successful"})
            access_token = create_access_token(identity=user)
            set_access_cookies(response, access_token)
            return response
        else:
            return {'message': 'Invalid credentials'}, 401


@auth_ns.route('/logout')
class Logout(Resource):

    def post(self):
        response = jsonify({'message': "logout successful"})
        unset_jwt_cookies(response)
        return response


# Protected resource that requires a valid JWT
# for testing authentication
@auth_ns.route('/protected')
class Protected(Resource):
    method_decorators = [jwt_required()]

    def get(self):
        return {'message': f'Hello, {current_user}'}, 200
