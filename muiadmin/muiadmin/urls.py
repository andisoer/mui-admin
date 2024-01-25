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
from django.contrib import admin
from django.urls import path
from berita.views import *
from . import views

from django.shortcuts import render


def index(request) :
    title = "Dashboard"
    konteks = {
        'title': title,
    }
    return render(request, 'dashboard.html', konteks)

def sejarah(request) :
    title = "Sejarah"
    konteks = {
        'title': title,
    }
    return render(request, 'sejarah.html', konteks)
def gallery(request) :
    title = "Gallery"
    konteks = {
        'title': title,
    }
    return render(request, 'gallery.html', konteks)

def fatwa(request) :
    title = "Fatwa"
    konteks = {
        'title': title,
    }
    return render(request, 'fatwa.html', konteks)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index),
    path('dashboard/',views.index),
    path('berita/',Berita_View),
    path('addberita/',tambah_berita),
    path('ubah/<int:id_berita>',ubah_berita,name='ubah_berita'),
    path('hapus/<int:id_berita>',hapus_berita,name='hapus_berita'),
    path('sejarah/', sejarah),
    path('fatwa/', fatwa),
    path('gallery/', gallery),
]

