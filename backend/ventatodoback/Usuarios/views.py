from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Usuarios
from .serializers import UsuarioSerializer, UsuarioRegistroSerializer
# Create your views here.

class UsuarioRegistroApiView(APIView):
    
    def post(self, request):

        serializer = UsuarioRegistroSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):

            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UsuarioApiView(APIView):
    
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):

        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):

        user = Usuarios.objects.get(id=request.user.id)
        serializer = UsuarioSerializer(user, request.data)

        if serializer.is_valid(raise_exception=True):

            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)