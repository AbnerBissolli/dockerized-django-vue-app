# from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class HomeView(APIView):
    permission_classes= []
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        data = {'message': 'Welcome to the API endpoint!'}
        return Response(data)

class UserInfoView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
        return Response(data)