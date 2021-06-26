from django_filters import FilterSet
from shop.models import Product

class ProductFilter(FilterSet):

    class Meta:
        model = Product
        fields = ['category','id']

class CategoryFilter(FilterSet):

    class Meta:
        model = Product
        fields = ['category']
