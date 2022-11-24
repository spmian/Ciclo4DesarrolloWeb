from rest_framework.routers import DefaultRouter
from .views import ProductoModelViewSet

routerProducto = DefaultRouter()
routerProducto.register(prefix='productos', basename='productos', viewset=ProductoModelViewSet)