from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Categoria
from .serializers import CategoriaSerializer
# Create your views here.

class CategoriaModelViewSet(ModelViewSet):
    
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()