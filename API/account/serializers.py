from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = ("email", "password", "password2")

    def create(self, validated_data):
        del validated_data['password2']
        return User.objects.create_user(**validated_data)

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError('password is invalid!!?')
        return data


# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ("email", "username", "image")