from django.contrib import admin
from.models import Berita, Status
# Register your models here.
class kolomBerita(admin.ModelAdmin):
    list_display=['id','judul','penulis','tanggal','isi','foto','status']
    search_fields=['id','judul']
    list_filter=('status',)
    list_per_page=3
admin.site.register(Berita,kolomBerita)
admin.site.register(Status)