from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Producto
from .serializers import ProductoSerializer
# Create your views here.

class ProductoModelViewSet(ModelViewSet):
    
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()