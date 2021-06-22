from django.contrib import admin
from django.contrib.admin import ModelAdmin,register
from shop.models import Article

@register(Article)
class ArticleAdmin (ModelAdmin):
    list_display=['title']
