from django.db import models

# Create your models here.
class Status(models.Model):
    nama=models.CharField(max_length=50)
    ket=models.TextField()
    def __str__(self):
        return self.nama

class Berita(models.Model):
    kode_berita=models.CharField(max_length=8)
    judul=models.CharField(max_length=150)
    penulis=models.CharField(max_length=100)
    tanggal=models.CharField(max_length=50)
    waktu_posting=models.DateTimeField(auto_now_add=True)
    status=models.ForeignKey(Status,on_delete=models.CASCADE,null=True)
    def __str__(self):
        return "{}. {}".format(self.kode_berita,self.judul)
