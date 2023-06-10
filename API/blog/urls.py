from django.urls import path
from . import views



urlpatterns = [
    path("", views.ArticleApi.as_view(), name="article"),
    path("list/", views.ArticleListView.as_view(), name="article_list"),
    path("list/detail/<int:pk>", views.ArticleDetailView.as_view(), name="article_detail"),
    path("create/", views.ArticleApiCreateApiView.as_view(), name="create"),
    path("search/", views.SearchArticleApi.as_view(), name="search")
]
