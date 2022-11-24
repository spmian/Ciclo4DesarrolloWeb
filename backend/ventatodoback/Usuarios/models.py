from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Usuarios(AbstractUser):
    
    username = models.CharField(max_length=45, unique=True)
    email = models.EmailField()
    
    class Meta: 
        
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        
    def __str__(self):
        
        return self.username