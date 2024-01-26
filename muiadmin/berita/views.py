from django.shortcuts import render, redirect
from berita.forms import FormBerita
from berita.models import Berita
from django.contrib import messages
# Create your views here.

def tambah_berita(request):
    if request.POST:
        form=FormBerita(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,"Data berhasil ditambahkan")
            form=FormBerita()
            konteks={
                'form':form,
            }
            return render(request,'tambah_berita.html',konteks)
    else:
        form=FormBerita()
        konteks = {
            'form':form,
        }
        return render(request,'tambah_berita.html',konteks)

def ubah_berita(request,id_berita):
    Beritas=Berita.objects.get(id=id_berita)
    if request.POST:
        form=FormBerita(request.POST, instance=Beritas)
        if form.is_valid():
            form.save()
            messages.success(request,"Data berhasil diubah")
            return redirect('ubah_berita',id_berita=id_berita)
    else:
        form=FormBerita(instance=Beritas)
        konteks = {
            'form' : form,
            'Beritas' : Beritas
        }
    return render(request,'ubah_berita.html',konteks)

def hapus_berita(request,id_berita):
    Beritas=Berita.objects.get(id=id_berita)
    Beritas.delete()
    messages.success(request,"Data terhapus")
    return redirect('/berita/')

def Berita_View(request):
    Beritas=Berita.objects.all()
    konteks={
        'Beritas':Beritas,
    }
    return render(request,'berita.html',konteks)