from django.contrib import admin
from .models import Article, Category

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("user", "title", "subjects", "image", "shoe_image")
    list_filter = ("title",)
    search_fields = ("title", "subjects")

admin.site.register(Category)