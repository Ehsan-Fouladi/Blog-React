from django.urls import path
from . import views



urlpatterns = [
    path("", views.ArticleApi.as_view(), name="article"),
    path("list/", views.ArticleListView.as_view(), name="article_list"),
    path("create/", views.ArticleApiCreateApiView.as_view(), name="create"),
]
