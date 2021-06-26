from django.db.models import fields
from django.db.models.base import Model
from shop.models import Product
from rest_framework.serializers import HyperlinkedModelSerializer

class ProductSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title','image','price','description','category']
        read_only_fields = ['id']

class CategorySerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ['category']
        read_only_fields = ['category']
