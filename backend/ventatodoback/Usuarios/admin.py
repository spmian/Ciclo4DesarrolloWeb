from django.contrib import admin
from .models import Usuarios
from django.contrib.auth.admin import UserAdmin
# Register your models here.

@admin.register(Usuarios)
class UsuariosAdmin(UserAdmin):
    
    pass