from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
import hashlib, os

from .models import UserAccount
from .serializers import UserSerializer, CreateUserSerializer

def passwordHash(password: str):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100_000)
    out = salt + key
    return out

class UserView(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, req, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=req.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            username = serializer.data.get('username')
            email = serializer.data.get('email')

            queryset = UserAccount.objects.filter(email=email)
            if queryset.exists():
                return Response(UserSerializer(queryset[0]).data, status=status.status.HTTP_409_CONFLICT)
            password = serializer.data.get('password')
            password_ = passwordHash(password)
            user = UserAccount(name=name, email=email, username=username, password=password)
            user.save()
            return Response(UserSerializer(user).data, status=status.status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, format=None):
        pass

    def delete(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            username = serializer.data.get('username')
            email = serializer.data.get('email')

            queryset = UserAccount.objects.filter(email=email, username=username)
            if queryset.exists():
                user = UserAccount.objects.get(email=email, username=username)
                user.delete()
                return Response({'Status': 'success'}, status=status.HTTP_200_OK)
            return Response({'Stauts': 'User doesn\' exist'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)