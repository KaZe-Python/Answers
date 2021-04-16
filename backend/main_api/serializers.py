from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from .models import Question, Answer

class CreateQuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'author', 'content', 'created_at', 'updated_at')

class ListQuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'slug', 'author', 'content', 'created_at', 'updated_at')

class AnswerSerializer(ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'question', 'author', 'content', 'created_at', 'updated_at')    