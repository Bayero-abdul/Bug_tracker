from app.models.base_model import BaseModel, db
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


class Project(BaseModel):
    __tablename__ = 'projects'

    name = db.Column(db.String(250), nullable=False)
    description = db.Column(db.Text)

    def __repr__(self):
        return f"<Project {self.name}>"
