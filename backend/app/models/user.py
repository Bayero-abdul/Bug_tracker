from app.models.base_model import BaseModel, db
from enum import Enum
from flask_sqlalchemy import SQLAlchemy


class UserRole(Enum):
    ADMIN = 'admin'
    DEVELOPER = 'developer'


class User(BaseModel):
    __tablename__ = 'users'

    fullname = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)
    role = db.Column(
        db.Enum(UserRole),
        nullable=False,
        default=UserRole.DEVELOPER.value)
    password = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f"<User {self.fullname}>"
