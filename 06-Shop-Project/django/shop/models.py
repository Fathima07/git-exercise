from django.db.models.fields import  IntegerField,TextField, URLField
from django.db.models import ForeignKey,CASCADE
from django.db.models import Model


class Product(Model):
    title = TextField(default=" ")
    price = IntegerField(default=0)
    image = URLField(default=" ")
    category = TextField(default="")
    description = TextField(default=" ")
    

class Cart(Model):
    productId = ForeignKey(Product, on_delete=CASCADE)
    quantity = IntegerField(default=0)
    price = IntegerField(default=0)