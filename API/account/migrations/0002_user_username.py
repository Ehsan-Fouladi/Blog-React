# Generated by Django 4.2 on 2023-04-30 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default=1, max_length=100, verbose_name='username'),
            preserve_default=False,
        ),
    ]