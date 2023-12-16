from flask import request
from flask_restx import Namespace, Resource, fields, marshal_with

from app import db
from app.models.comment import Comment
from app.models.ticket import Ticket
from app.api.ticket import ticket_ns


comment_ns = Namespace('comments', description='Comment operations')

comment_model = comment_ns.model('Comment', {
    'id': fields.Integer(readonly=True, description='Comment ID'),
    'text': fields.String(required=True, description='Comment text', text="text"),
    'user_id': fields.Integer(description='User ID'),
    'ticket_id': fields.Integer(description='Ticket ID'),
    'created_at': fields.DateTime(readonly=True),
    'updated_at': fields.DateTime(readonly=True),
})


@comment_ns.route('/<int:comment_id>')
class CommentDetail(Resource):
    @comment_ns.doc("Get Comment by ID")
    @comment_ns.marshal_with(comment_model)
    def get(self, comment_id):
        comment = Comment.query.get_or_404(comment_id)
        return comment

    @comment_ns.doc("Update Comment")
    @comment_ns.expect(comment_model)
    @comment_ns.marshal_with(comment_model)
    def put(self, comment_id):
        data = request.get_json()
        comment = Comment.query.get_or_404(comment_id)

        comment.update(
            text=data.get('text', comment.text)
        )

        return comment

    @comment_ns.doc("Delete Comment")
    @comment_ns.response(204, 'Comment deleted successfully')
    def delete(self, comment_id):
        comment = Comment.query.get_or_404(comment_id)
        comment.delete()
        return '', 204


@ticket_ns.route('/<int:ticket_id>/comments')
class TicketCommentsResource(Resource):
    @ticket_ns.doc("Get All Comments for a Ticket")
    @ticket_ns.marshal_with(comment_model, as_list=True)
    def get(self, ticket_id):
        ticket = Ticket.query.get_or_404(ticket_id)
        comments = Comment.query.filter_by(ticket_id=ticket.id).all()
        return comments

    @ticket_ns.doc("Create New Comment")
    @ticket_ns.expect(comment_model)
    @ticket_ns.marshal_with(comment_model, code=201)
    def post(self, ticket_id):
        data = request.get_json()

        ticket = Ticket.query.get_or_404(ticket_id)
        data['ticket_id'] = ticket.id

        new_comment = Comment(**data)
        new_comment.save()
        return new_comment, 201
