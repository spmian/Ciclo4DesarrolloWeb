from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UsuarioApiView, UsuarioRegistroApiView

urlpatterns = [
    path('auth/register', UsuarioRegistroApiView.as_view()),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/me', UsuarioApiView.as_view()),    
]
