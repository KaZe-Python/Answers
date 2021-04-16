from django.urls import path

from .views import CreateQuestions, ListCreateAnswers, ListQuestions

urlpatterns = [
    path('create-questions/', CreateQuestions.as_view(), name="create_questions"),
    path('list-questions/', ListQuestions.as_view(), name="list_questions"),
    path('create-answer/', ListCreateAnswers.as_view(), name="create_answer")
]