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
from berita.views import *
from . import views

from django.shortcuts import render
from .forms import SejarahForm
from .models import Sejarah
from django.contrib import admin


def index(request):
    title = "Dashboard"
    konteks = {
        "title": title,
    }
    return render(request, "dashboard.html", konteks)


def upload_sejarah(request):
    if request.method == "POST":
        form = SejarahForm(request.POST)
        print(form)
        if form.is_valid():
            form.save()
    form = SejarahForm()
    return render(request, "upload_sejarah.html", {"form": form})


def get_sejarah(request):
    content = Sejarah.objects.all()
    context = {"post": content}
    return render(request, "list_sejarah.html", context)


def get_sejarah_byId_or_title(request, id=None, title=None):
    if id is not None:
        content = Sejarah.objects.get(id=id)
    elif title is not None:
        content = Sejarah.objects.filter(title=title).first()
    else:
        content = None
    return render(request, "sejarah.html", {"post": content})

def sejarah(request):
    title = "Sejarah"
    konteks = {'title': title}
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


def konsultasi(request):
    title = "konsultasi"
    konteks = {
        'title': title
    }
    return render(request, 'konsultasi.html',konteks)

def login(request):
    title = "login"
    konteks = {'title': title}
    return render(request, 'login.html', konteks)

def register(request):
    title = "register"
    konteks = {'title': title}
    return render(request, 'register.html', konteks)

def login(request) :
    title = "login"
    konteks = {
        'title': title,
    }
    return render(request, 'login.html', konteks)

def register(request) :
    title = "register"
    konteks = {
        'title': title,
    }
    return render(request, 'register.html', konteks)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index),
    path('dashboard/',views.index),
    path('berita/',Berita_View),
    path('addberita/',tambah_berita),
    path('ubah/<int:id_berita>',ubah_berita,name='ubah_berita'),
    path('hapus/<int:id_berita>',hapus_berita,name='hapus_berita'),
    path('sejarah/', sejarah),
    # path('dashboard/', index, name='dashboard'),
    path('sejarah/', sejarah, name='sejarah'),
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    # path('sejarah/', sejarah),
    path('login/',login),
    path('register/',register),
    path('konsultasi/', konsultasi),
    path("", index),
    path("sejarah/", upload_sejarah),
    path("sejarah/<int:id>/", get_sejarah_byId_or_title),
    #path("sejarahs/", get_sejarah),

    # path('dashboard/', index),
    # path('sejarah/', sejarah),
    path('fatwa/', fatwa),
    path('gallery/', gallery),
]

