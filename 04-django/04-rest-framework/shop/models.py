from django.db.models.fields import CharField,TextField
from django.db.models import Model


class Article(Model):
    title = CharField(max_length= 50)
    content = TextField(default=" ")
    category = CharField(max_length=50)


