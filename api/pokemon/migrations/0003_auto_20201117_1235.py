# Generated by Django 3.1.3 on 2020-11-17 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0002_auto_20201116_2150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pokemon',
            name='type',
            field=models.CharField(choices=[('Grass', 'Grass'), ('Poison', 'Poison'), ('Flying', 'Flying'), ('Fire', 'Fire')], max_length=10),
        ),
    ]
