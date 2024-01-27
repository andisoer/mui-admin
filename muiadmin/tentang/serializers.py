from rest_framework import serializers
from .models import Deskripsi

class DeskripsiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deskripsi
        fields = '__all__'