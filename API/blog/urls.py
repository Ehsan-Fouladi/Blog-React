from django.urls import path
from . import views



urlpatterns = [
    path("", views.ArticleApi.as_view(), name="article"),
    path("create/", views.ArticleApiCreateApiView.as_view(), name="create")
]
