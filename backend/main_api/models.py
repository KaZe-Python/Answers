from django.db import models

from authapi.models import UserAccount

from slugger import AutoSlugField


class Question(models.Model):
    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from='title')
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-updated_at',)
    
    def __str__(self):
        return self.title

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    content = models.TextField(max_length=10_000)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-updated_at',)

    def __str__(self):
        return self.content