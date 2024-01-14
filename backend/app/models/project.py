from app.models.base_model import BaseModel, db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


class Project(BaseModel):
    __tablename__ = 'projects'

    name = db.Column(db.String(250), nullable=False)
    description = db.Column(db.Text)

    tickets = relationship('Ticket', backref='project')
    team = relationship('Team', backref='project')

    def __repr__(self):
        return f"<Project {self.name}>"
