from rest_framework.routers import DefaultRouter
from .views import CategoriaModelViewSet

routerCategoria = DefaultRouter()
routerCategoria.register(prefix='categoria', basename='categoria', viewset=CategoriaModelViewSet)