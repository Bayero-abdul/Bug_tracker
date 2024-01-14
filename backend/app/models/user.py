from app.models.base_model import BaseModel, db
from enum import Enum
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Table


team_user_association = Table(
    'team_user_association', BaseModel.metadata,
    db.Column('team_id', db.Integer, db.ForeignKey('team.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)


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

    teams = relationship(
        'Team',
        secondary='team_user_association',
        back_populates='users')
    tickets_authored = relationship(
        'Ticket',
        backref='author',
        foreign_keys='Ticket.author_id')
    tickets_assigned = relationship(
        'Ticket',
        backref='assigned_to',
        foreign_keys='Ticket.assigned_to_id')
    comments = relationship('Comment', backref='user')

    def __repr__(self):
        return f"<User {self.fullname}>"
