from rest_framework import serializers
from .models import Usuarios

class UsuarioRegistroSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = Usuarios
        fields = ['id', 'email', 'username', 'password']
    
    def create(self, validated_data):
        
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            
            instance.set_password(password)
        
        instance.save()
        return instance     
        
class UsuarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = Usuarios
        fields = ['id', 'email', 'username', 'password']