from django.db import models

# Create your models here.

class Categoria(models.Model):
    
    nombre = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
        
    def __str__(self): 
        
        return self.nombre