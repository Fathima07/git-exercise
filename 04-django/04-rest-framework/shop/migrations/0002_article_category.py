# Generated by Django 3.2.4 on 2021-06-22 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]
