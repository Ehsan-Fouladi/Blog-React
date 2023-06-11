from rest_framework import serializers
from .models import Article, Category


class UserEmailNameRelationalField(serializers.RelatedField):
    def to_representation(self, value):
        return f'{value.email}'


class CategoryArticle(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ("title", "create_at")


class ArticleSerializer(serializers.ModelSerializer):
    user = UserEmailNameRelationalField(read_only=True)
    category = CategoryArticle(read_only=True, many=True)

    class Meta:
        model = Article
        fields = ('id', "user", "fullname", "title",
                  "subjects", "image", "create", "category")

        def create(self, validated_data):
            return Article.objects.create(**validated_data)

        def get_image(self, obj):
            request = self.context.get("request")
            if obj.image:
                image_url = obj.image.url
                return request.build_absolute_uri(image_url)
            return None