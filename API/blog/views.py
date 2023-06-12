from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from .models import Article
from .serializers import ArticleSerializer
from .pagination import StandardResultsSetPagination, StandardResultsSetPaginationList
from .permissions import IsPublisherOrReadOnly


class ArticleApi(APIView, StandardResultsSetPagination):
    """ Home View List Article """
    serializer_class = ArticleSerializer

    def get(self, request):
        ser_as = Article.objects.all().order_by("-create")
        result = self.paginate_queryset(ser_as, request)
        serializer = ArticleSerializer(
            instance=result, many=True, context={"request": request})
        return self.get_paginated_response(serializer.data)


class ArticleApiCreateApiView(APIView):
    """ create new Article """
    serializer_class = ArticleSerializer
    permission_classes = (IsPublisherOrReadOnly,)
    parser_classes = (MultiPartParser,)

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = self.request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)


class ArticleListView(ListAPIView):
    """ All post Article """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    pagination_class = StandardResultsSetPaginationList


class ArticleDetailView(APIView):
    """ Detail Article """
    serializer_class = ArticleSerializer
    parser_classes = (MultiPartParser,)
    permission_classes = (IsPublisherOrReadOnly,)

    def get_object(self):
        obj = get_object_or_404(Article.objects.all(), id=self.kwargs["pk"])
        self.check_object_permissions(self.request, obj)
        return obj

    def get(self, request, pk):
        query = self.get_object()
        serializer = ArticleSerializer(instance=query)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        obj = self.get_object()
        serializer = ArticleSerializer(data=request.data, instance=obj)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        obj = self.get_object()
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SearchArticleApi(APIView, StandardResultsSetPaginationList):
    """ Search All Post Article """
    serializer_class = ArticleSerializer

    def get(self, request):
        q = request.GET.get("q")
        queryset = Article.objects.filter(
            Q(title__icontains=q) | Q(subjects__icontains=q))
        result = self.paginate_queryset(queryset, request)
        serializer = ArticleSerializer(instance=result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
