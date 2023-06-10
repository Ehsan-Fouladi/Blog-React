from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Q
from .models import Article
from .serializers import ArticleSerializer
from .pagination import StandardResultsSetPagination, StandardResultsSetPaginationList

class ArticleApi(APIView, StandardResultsSetPagination):
    """ Home View List Article """
    serializer_class = ArticleSerializer

    def get(self, request):
        ser_as = Article.objects.all().order_by("-create")
        result = self.paginate_queryset(ser_as, request)
        serializer = ArticleSerializer(instance=result, many=True, context={"request":request})
        return self.get_paginated_response(serializer.data)
    
    
class ArticleApiCreateApiView(ListCreateAPIView):
    """ create new Article """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class ArticleListView(ListAPIView):
    """ All post Article """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    pagination_class = StandardResultsSetPaginationList

class ArticleDetailView(APIView):
    """ Detail Article """
    serializer_class = ArticleSerializer

    def get(self, request, pk):
        query = Article.objects.get(id=pk)
        serializer = ArticleSerializer(instance=query)
        return Response(serializer.data)

class SearchArticleApi(APIView, StandardResultsSetPaginationList):
    """ Search All Post Article """
    serializer_class = ArticleSerializer
    def get(self, request):
        q = request.GET.get("q")
        queryset = Article.objects.filter(Q(title__icontains=q) | Q(subjects__icontains=q))
        result = self.paginate_queryset(queryset, request)
        serializer = ArticleSerializer(instance=result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
