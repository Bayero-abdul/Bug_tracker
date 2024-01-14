from flask import request
from flask_restx import Resource, Namespace, fields
from datetime import datetime, time

from app import db
from app.models.ticket import Ticket
from app.api.project import project_ns


class TimeFormat(fields.Raw):
    def format(self, value):
        print(value)
        return datetime.strftime(value, '%Y-%m-%d %H:%M:%S')


class MySQLDateTimeField(fields.Raw):
    def format(self, value):
        # Assuming `value` is a datetime object
        print("value:", value)
        if isinstance(value, datetime):
            return value.strftime('%Y-%m-%d %H:%M:%S')
        elif value is None:
            return None  # or any other default value you prefer
        return value


ticket_ns = Namespace('tickets', description='Ticket operations')

ticket_model = ticket_ns.model('Ticket', {
    'id': fields.Integer(readonly=True, description='Ticket ID'),
    'title': fields.String(required=True, description='Ticket title', default="title"),
    'description': fields.String(description='Ticket description', default=""),
    'author_id': fields.Integer(description='Author ID', default=None),
    'assigned_to_id': fields.Integer(description='Assigned To ID', default=None),
    'project_id': fields.Integer(readonly=True, description='Project ID', default=None),
    'type': fields.String(description='Ticket type', default=""),
    'status': fields.String(description='Ticket status', default=""),
    'priority': fields.String(description='Ticket priority', default=""),
    'due_date': fields.DateTime(default=None),
    'created_at': fields.DateTime(readonly=True),
    'updated_at': fields.DateTime(readonly=True),
})


@project_ns.route('/<int:project_id>/tickets')
class ProjectTickets(Resource):
    @project_ns.doc("Get all tickets for a project")
    @project_ns.marshal_list_with(ticket_model)
    def get(self, project_id):
        """Get all tickets for a project"""
        tickets = Ticket.query.filter_by(project_id=project_id).all()
        return tickets

    @project_ns.doc("Create a new ticket for a project")
    @project_ns.expect(ticket_model)
    @project_ns.marshal_with(ticket_model)
    def post(self, project_id):
        """Create a new ticket for a project"""
        data = request.get_json()

        new_ticket = Ticket(**data)
        new_ticket.project_id = project_id
        new_ticket.save()
        return new_ticket, 201


@ticket_ns.route('/<int:ticket_id>')
class TicketDetail(Resource):
    @ticket_ns.doc("Get ticket by ID")
    @ticket_ns.marshal_with(ticket_model)
    def get(self, ticket_id):
        """Get ticket by ID"""
        ticket = Ticket.query.get_or_404(ticket_id)
        return ticket

    @ticket_ns.doc("Update ticket by ID")
    @ticket_ns.expect(ticket_model)
    @ticket_ns.marshal_with(ticket_model)
    def put(self, ticket_id):
        """Update ticket by ID"""
        data = request.get_json()

        ticket = Ticket.query.get_or_404(ticket_id)
        ticket.update(**data)
        return ticket

    @ticket_ns.doc("Delete ticket by ID")
    @ticket_ns.response(204, 'Ticket deleted successfully')
    def delete(self, ticket_id):
        """Delete ticket by ID"""
        ticket = Ticket.query.get_or_404(ticket_id)
        ticket.delete()
        return "", 204
