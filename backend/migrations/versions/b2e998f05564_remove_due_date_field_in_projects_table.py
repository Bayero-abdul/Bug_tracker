"""Remove due_date field in projects table

Revision ID: b2e998f05564
Revises: 894df49bd032
Create Date: 2023-12-11 10:02:10.287379

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b2e998f05564'
down_revision = '894df49bd032'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('projects', schema=None) as batch_op:
        batch_op.drop_column('due_date')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('projects', schema=None) as batch_op:
        batch_op.add_column(sa.Column('due_date', mysql.DATETIME(), nullable=True))

    # ### end Alembic commands ###
