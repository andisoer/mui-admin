# Generated by Django 4.2.6 on 2024-01-23 15:38

import berita.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berita', '0002_rename_id_berita_berita_kode_berita'),
    ]

    operations = [
        migrations.AddField(
            model_name='berita',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to=berita.models.filepath),
        ),
        migrations.AlterField(
            model_name='berita',
            name='judul',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='status',
            name='nama',
            field=models.CharField(max_length=50),
        ),
    ]
