"""
URL configuration for muiadmin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from django.shortcuts import render

def index(request):
    title = "Dashboard"
    konteks = {'title': title}
    return render(request, 'dashboard.html', konteks)

def sejarah(request):
    title = "Sejarah"
    konteks = {'title': title}
    return render(request, 'sejarah.html', konteks)

def login(request):
    title = "login"
    konteks = {'title': title}
    return render(request, 'login.html', konteks)

def register(request):
    title = "register"
    konteks = {'title': title}
    return render(request, 'register.html', konteks)

urlpatterns = [
    path('dashboard/', index, name='dashboard'),
    path('sejarah/', sejarah, name='sejarah'),
    path('login/', login, name='login'),
    path('register/', register, name='register'),
]
