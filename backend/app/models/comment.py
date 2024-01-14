from app.models.base_model import BaseModel, db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


class Comment(BaseModel):
    __tablename__ = 'comments'

    text = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    ticket_id = db.Column(db.Integer, db.ForeignKey('tickets.id'))

    def __repr__(self):
        return f"<Project {self.name}>"
