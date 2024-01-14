from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

from app.models.base_model import BaseModel, db
from app.models.user import User


class Team(BaseModel):
    __tablename__ = 'team'

    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

    users = db.relationship(
        'User',
        secondary='team_user_association',
        back_populates='teams')

    #def __repr__(self):
     #   return f"<Project {self.name}>"
