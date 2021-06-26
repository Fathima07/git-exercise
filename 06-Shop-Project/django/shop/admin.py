from django.contrib import admin
from django.contrib.admin import ModelAdmin,register
from shop.models import Product
from shop.models import Cart

@register(Product)
class ProductAdmin (ModelAdmin):
    list_display=['title']

@register(Cart)
class CartAdmin (ModelAdmin):
    list_display=['id']
