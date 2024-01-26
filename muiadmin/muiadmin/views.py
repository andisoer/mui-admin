from django.urls import path
from django.shortcuts import render
from django.conf.urls.static import static

def index(request) :
    title = "Dashboard"
    konteks = {
        'title': title,
    }
    return render(request, 'dashboard.html', konteks)

def indexAdmin(request) :
    title = "Admin"
    konteks = {
        'title': title,
    }
    return render(request, 'admin/tampil_admin.html', konteks)

urlpatterns = [
    path('dashboard/', index),
]