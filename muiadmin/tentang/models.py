from django.db import models

class Deskripsi(models.Model):
    deskripsi = models.TextField()

# To retrieve the first object from the Deskripsi model
first_deskripsi = Deskripsi.objects.first()
