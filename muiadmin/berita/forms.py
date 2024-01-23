from django.forms import ModelForm
from berita.models import Berita
from django import forms
class FormBerita(ModelForm):
    class Meta :
        model=Berita
        fields='__all__'

        widgets={
            'kode_berita': forms.TextInput({'class' : 'form-control'}),
            'judul': forms.TextInput({'class' : 'form-control'}),
            'penulis': forms.TextInput({'class' : 'form-control'}),
            'tanggal': forms.TextInput({'class' : 'form-control'}),
            'foto' : forms.FileInput({'class' : 'form-control'}),
            
            'status': forms.Select({'class' : 'form-control'}),
        }