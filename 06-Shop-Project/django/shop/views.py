from django.shortcuts import render
from shop.filters import ProductFilter,CategoryFilter
from shop.models import Product
from shop.serializers import ProductSerializer,CategorySerializer
from rest_framework.viewsets import ModelViewSet


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter

class CategoryViewSet(ModelViewSet):
    queryset = Product.objects.values('category').distinct()
    serializer_class = CategorySerializer
    filterset_class = CategoryFilter



     