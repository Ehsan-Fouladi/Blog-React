from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Article
from .serializers import ArticleSerializer
from .pagination import StandardResultsSetPagination

class ArticleApi(APIView, StandardResultsSetPagination):
    """ View List Article """
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