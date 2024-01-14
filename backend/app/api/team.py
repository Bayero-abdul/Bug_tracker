from flask import request
from flask_restx import Namespace, Resource, fields, marshal_with

from app import db
from app.models.user import User
from app.models.team import Team
from app.models.project import Project
from app.api.user import user_model
from app.api.project import project_ns

team_ns = Namespace('teams', description='Team operations')

team_model = team_ns.model('Team', {
    'id': fields.Integer(readonly=True, description='Team ID'),
    'project_id': fields.Integer(readonly=True, description='Project ID'),
    'users': fields.List(fields.Nested(user_model))
})


@team_ns.route('/')
class TeamsList(Resource):
    @team_ns.doc("Get All Teams")
    @team_ns.marshal_with(team_model, as_list=True)
    def get(self):
        teams = Team.query.all()
        return teams

    @team_ns.doc("Create New Team")
    @team_ns.expect(team_model)
    @team_ns.marshal_with(team_model, code=201)
    def post(self):
        data = request.get_json()
        new_team = Team(**data)
        new_team.save()
        return new_team, 201

@team_ns.route('/<int:team_id>')
class TeamDetail(Resource):
    @team_ns.doc("Get Team by ID")
    @team_ns.marshal_with(team_model)
    def get(self, team_id):
        team = Team.query.get_or_404(team_id)
        return team

    @team_ns.doc("Update Team")
    @team_ns.expect(team_model)
    @team_ns.marshal_with(team_model)
    def put(self, team_id):
        data = request.get_json()
        team = Team.query.get_or_404(team_id)
        team.update(**data)
        return team

    @team_ns.doc("Delete Team")
    @team_ns.response(204, 'Team deleted successfully')
    def delete(self, team_id):
        team = Team.query.get_or_404(team_id)
        team.delete()
        return '', 204

@team_ns.route('/<int:project_id>/team')
class ProjectTeam(Resource):
    @team_ns.doc("Create a team for a project with users")
    @team_ns.expect(team_model)
    @team_ns.marshal_with(team_model)
    def post(self, project_id):

        project = Project.query.get(project_id)
        
        if project is None:
            return {"message": "Project not found"}, 404
        
        if project.team:
            return {'message': 'Project already has a team'}, 400

        data = request.get_json()

        users_data = data.get('users', [])
        del data['users']

        users = []
        for user_data in users_data:
            user = User.query.filter_by(email=user_data.get("email")).first()
            users.append(user)

        new_team = Team(
            project_id=project.id,
            users=users
        )

        new_team.save()
        return new_team, 201

    @team_ns.doc("Get users of the team associated with a project")
    @team_ns.marshal_with(team_model)
    def get(self, project_id):
        project = Project.query.get_or_404(project_id)

        if not project.team:
            return {'message': 'Project does not have a team'}, 404

        return project.team


@team_ns.route('/<int:project_id>/team/<int:team_id>/users')
class ProjectTeamUser(Resource):
    @team_ns.doc("Add a user to the team of a project")
    @team_ns.expect(user_model)
    @team_ns.marshal_with(team_model)
    def put(self, project_id, team_id):
        project = Project.query.get_or_404(project_id)
        team = Team.query.get_or_404(team_id)

        user_data = request.get_json()

        user = User.query.filter_by(email=user_data.get("email")).first()
        team.users.append(user)

        db.session.commit()
        return team

    @team_ns.doc("Remove a user from the team of a project")
    @team_ns.expect(user_model)
    @team_ns.marshal_with(team_model)
    def delete(self, project_id, team_id):
        project = Project.query.get_or_404(project_id)
        team = Team.query.get_or_404(team_id)

        user_data = request.get_json()

        user = User.query.filter_by(email=user_data.get("email")).first()
        team.users.remove(user)

        db.session.commit()
        return team

