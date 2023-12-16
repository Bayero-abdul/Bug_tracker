from flask import request
from flask_restx import Resource, Namespace, fields, marshal_with
from werkzeug.security import generate_password_hash, check_password_hash

from app.models.user import User, UserRole
from app import db


user_ns = Namespace('users', description='User operations')

user_model = user_ns.model('User', {
    'id': fields.Integer(readonly=True, description='User ID'),
    'fullname': fields.String(required=True, description='User Fullname', default=""),
    'email': fields.String(required=True, description='User Email', default=""),
    'role': fields.String(description='User Role', default=""),
    'password': fields.String(readonly=True, description='User password', default="")
})


@user_ns.route('/')
class UsersList(Resource):
    @user_ns.doc("Get all users")
    @user_ns.marshal_list_with(user_model)
    def get(self):
        """Get all users"""
        users = User.query.all()
        return users

    @user_ns.doc("Create a new user")
    @user_ns.expect(user_model)
    @user_ns.marshal_with(user_model)
    def post(self):
        """Create a new user"""
        data = request.get_json()

        email = data.get("email")
        user = User.query.filter_by(email=email).first()
        if user is not None:
            return {"message": f"User with email {email} already exists"}, 400

        hashed_password = generate_password_hash(
            data.get("password"), method='scrypt')

        data["password"] = hashed_password
        new_user = User(**data)

        new_user.save()
        return new_user, 201


@user_ns.route('/<int:user_id>')
class UserDetail(Resource):
    @user_ns.doc("Get user by ID")
    @user_ns.marshal_with(user_model)
    def get(self, user_id):
        """Get user by ID"""
        user = User.query.get_or_404(user_id)
        return user

    @user_ns.doc("UPdate user by ID")
    @user_ns.expect(user_model)
    @user_ns.marshal_with(user_model)
    def put(self, user_id):
        """Update user by ID"""
        data = request.get_json()

        user = User.query.get_or_404(user_id)
        user.update(**data)
        return user

    @user_ns.doc("Delete user by ID")
    @user_ns.response(204, 'User deleted successfully')
    def delete(self, user_id):
        """Delete user by ID"""
        user = User.query.get_or_404(user_id)
        user.delete()
        return "", 204
