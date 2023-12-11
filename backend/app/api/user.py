from flask import request
from flask_restx import Resource, Namespace, fields, marshal_with
from werkzeug.security import generate_password_hash, check_password_hash

from app.models.user import User, UserRole
from app import db


user_ns = Namespace('users', description='User operations')

user_model = user_ns.model('User', {
    'id': fields.Integer(required=True, description='User ID'),
    'fullname': fields.String(required=True, description='User Fullname'),
    'email': fields.String(required=True, description='User Email'),
    'role': fields.String(description='User Role'),
})


@user_ns.route('/')
class UsersList(Resource):
    @user_ns.doc("List users")
    @user_ns.marshal_list_with(user_model)
    def get(self):
        """Get all users"""
        users = User.query.all()
        return user

    @user_ns.doc("Create user")
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

        new_user = User(
            fullname=data.get("fullname"),
            email=data.get("email"),
            password=hashed_password,
            role=data.get('role', UserRole.DEVELOPER.value),
        )

        new_user.save()
        return new_user, 201


@user_ns.route('/<int:user_id>')
class UserDetail(Resource):
    @user_ns.doc("Get user")
    @user_ns.marshal_with(user_model)
    def get(self, user_id):
        """Get user by ID"""
        user = User.query.get(user_id)
        if user is None:
            return {"message": "User not found"}, 404

        return user

    @user_ns.doc("Update user")
    @user_ns.expect(user_model)
    @user_ns.marshal_with(user_model)
    def put(self, user_id):
        """Update user by ID"""
        data = request.get_json()

        user = User.query.get(user_id)
        if user is None:
            return {"message": "User not found"}, 404

        user.update(
            fullname=data.get("fullname"),
            email=data.get("email"),
            role=data.get('role', UserRole.DEVELOPER.value),
        )

        return user

    @user_ns.doc("Delete user")
    def delete(self, user_id):
        """Delete user by ID"""
        user = User.query.get(user_id)
        if user is None:
            return {"message": "User not found"}, 404

        user.delete()
        return {"message": "User deleted successfully"}, 204
