from rest_framework import generics
from .models import Deskripsi
from .serializers import DeskripsiSerializer

class DeskripsiListCreate(generics.ListCreateAPIView):
    queryset = Deskripsi.objects.all()
    serializer_class = DeskripsiSerializer

class DeskripsiRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deskripsi.objects.all()
    serializer_class = DeskripsiSerializer
