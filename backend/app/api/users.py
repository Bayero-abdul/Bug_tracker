from flask import request
from flask_restx import Resource, Namespace, fields, marshal_with

from app.models.user import Users
from app import db


users_ns = Namespace('users', description='User operations')
