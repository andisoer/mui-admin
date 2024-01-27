from django.urls import path
from .views import DeskripsiListCreate, DeskripsiRetrieveUpdateDestroy

urlpatterns = [
    path('', DeskripsiListCreate.as_view(), name='deskripsi-list-create'),
    path('deskripsi/<int:pk>/', DeskripsiRetrieveUpdateDestroy.as_view(), name='deskripsi-detail'),
]
