from django.contrib import admin
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("user", "title", "subjects", "image")
    list_filter = ("title",)