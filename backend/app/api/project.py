from flask import request
from flask_restx import Namespace, Resource, fields
from datetime import datetime

from app.models.project import Project
from app import db


project_ns = Namespace('projects', description='Project operations')

project_model = project_ns.model('Project', {
    'id': fields.Integer(readonly=True, description='Project ID'),
    'name': fields.String(required=True, description='Project Name', default="name"),
    'description': fields.String(description='Project Description', default=""),
})


@project_ns.route('/')
class ProjectsList(Resource):
    @project_ns.doc("List projects")
    @project_ns.marshal_list_with(project_model)
    def get(self):
        """Get all projects"""
        projects = Project.query.all()
        return projects

    @project_ns.doc("Create project")
    @project_ns.expect(project_model)
    @project_ns.marshal_with(project_model)
    def post(self):
        """Create a new project"""
        data = request.get_json()

        new_project = Project(**data)
        new_project.save()
        return new_project, 201


@project_ns.route('/<int:project_id>')
class ProjectDetail(Resource):
    @project_ns.doc("Get project by ID")
    @project_ns.marshal_with(project_model)
    def get(self, project_id):
        """Get project by ID"""
        project = Project.query.get_or_404(project_id)
        return project

    @project_ns.doc("Update project")
    @project_ns.expect(project_model)
    @project_ns.marshal_with(project_model)
    def put(self, project_id):
        """Update project by ID"""
        data = request.get_json()

        project = Project.query.get_or_404(project_id)
        project.update(**data)
        return project

    @project_ns.doc("Delete project by ID")
    @project_ns.response(204, 'Project deleted successfully')
    def delete(self, project_id):
        """Delete project by ID"""
        project = Project.query.get_or_404(project_id)
        project.delete()
        return "", 204
