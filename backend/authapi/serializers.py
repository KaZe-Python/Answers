from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

from .models import UserAccount

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('id', 'name', 'username', 'email', 'join_at')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('name', 'username', 'email')

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = get_user_model()
        fields = ('id', 'email', 'name', 'username')