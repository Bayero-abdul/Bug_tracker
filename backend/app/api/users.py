from flask import request
from flask_restx import Resource, Namespace, fields, marshal_with
from werkzeug.security import generate_password_hash, check_password_hash

from app.models.users import Users, UserRole
from app import db


users_ns = Namespace('users', description='User operations')

user_model = users_ns.model('User', {
    'id': fields.Integer(required=True, description='User ID'),
    'fullname': fields.String(required=True, description='User Fullname'),
    'email': fields.String(required=True, description='User Email'),
    'role': fields.String(description='User Role'),
    'hashed_password': fields.String(required=True, description='User Password'),
})


@users_ns.route('/')
class UsersList(Resource):
    @users_ns.doc("List users")
    @users_ns.marshal_list_with(user_model)
    def get(self):
        """Get all users"""
        users = Users.query.all()
        return users

    @users_ns.doc("Create user")
    @users_ns.expect(user_model)
    @users_ns.marshal_with(user_model)
    def post(self):
        """Create a new user"""
        data = request.get_json()
        email = data.get("email")
        user = Users.query.filter_by(email=email).first()
        if user is not None:
            return {"message": f"User with email {email} already exists"}, 400

        hashed_password = generate_password_hash(
            data.get("password"), method='scrypt')

        new_user = Users(
            fullname=data.get("fullname"),
            email=data.get("email"),
            hashed_password=hashed_password,
            role=data.get('role', UserRole.DEVELOPER.value),
        )

        new_user.save()
        return new_user, 201


@users_ns.route('/<int:user_id>')
class User(Resource):
    @users_ns.doc("Get user")
    @users_ns.marshal_with(user_model)
    def get(self, user_id):
        """Get user by ID"""
        user = Users.query.get(user_id)
        if user is None:
            return {"message": "User not found"}, 404
        return user

    @users_ns.doc("Update user")
    @users_ns.expect(user_model)
    @users_ns.marshal_with(user_model)
    def put(self, user_id):
        """Update user by ID"""
        data = request.get_json()
        user = Users.query.get(id)
        if user is None:
            return {"message": "User not found"}, 404

        hashed_password = generate_password_hash(
            data.get("password"), method='scrypt')

        user.update(
            fullname=data.get("fullname"),
            email=data.get("email"),
            hashed_password=hashed_password,
            role=data.get('role', UserRole.DEVELOPER.value),
        )

        return user

    @users_ns.doc("Delete user")
    def delete(self, user_id):
        """Delete user by ID"""
        user = Users.query.get(user_id)
        if user is None:
            return {"message": "User not found"}, 404

        user.delete()
        return {"message": "User deleted successfully"}, 204
