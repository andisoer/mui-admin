from django.db import models
import datetime
import os

# Create your models here.
def filepath(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = "%s%S" % (timeNow, old_filename)
    return os.path.join('uploads/', filename)

class Status(models.Model):
    nama=models.CharField(max_length=50)
    ket=models.TextField()
    def __str__(self):
        return self.nama

class Berita(models.Model):
    kode_berita=models.CharField(max_length=8)
    judul=models.CharField(max_length=100)
    penulis=models.CharField(max_length=100)
    tanggal=models.CharField(max_length=50)
    isi=models.TextField(default="")
    foto=models.ImageField(upload_to=filepath, null=True, blank=True)
    waktu_posting=models.DateTimeField(auto_now_add=True)
    status=models.ForeignKey(Status,on_delete=models.CASCADE,null=True)
    def __str__(self):
        return "{}. {}".format(self.kode_berita,self.judul)
    
