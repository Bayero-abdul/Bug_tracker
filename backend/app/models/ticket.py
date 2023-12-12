from app.models.base_model import BaseModel, db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


class Ticket(BaseModel):
    __tablename__ = 'tickets'

    title = db.Column(db.String(250), nullable=False)
    description = db.Column(db.Text)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    project_id = db.Column(
        db.Integer,
        db.ForeignKey('projects.id'),
        nullable=True)
    assigned_to_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=True)
    type = db.Column(db.String(20))
    status = db.Column(db.String(20))
    priority = db.Column(db.String(20))
    due_date = db.Column(db.DateTime)

    comments = relationship('Comment', backref='ticket')

    def __repr__(self):
        return f"<Project {self.name}>"
