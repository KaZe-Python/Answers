from django.shortcuts import render
from rest_framework import generics

from .models import Question, Answer
from .serializers import CreateQuestionSerializer, AnswerSerializer
from .serializers import ListQuestionSerializer

class CreateQuestions(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = CreateQuestionSerializer

class ListQuestions(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = ListQuestionSerializer


class ListCreateAnswers(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer