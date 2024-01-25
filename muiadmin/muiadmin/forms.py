from django.forms import ModelForm
from .models import Sejarah
from django import forms


class SejarahForm(ModelForm):
    content = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control h-25"}))
    # title = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))

    class Meta:
        model = Sejarah
        fields = ["content"]
        # fields = ["title", "content"]
