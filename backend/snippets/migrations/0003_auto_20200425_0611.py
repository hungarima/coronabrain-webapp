# Generated by Django 3.0.4 on 2020-04-25 06:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0002_auto_20200424_1515'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CompanyProduct',
            new_name='Product',
        ),
        migrations.RenameModel(
            old_name='CompanyRepresentative',
            new_name='Representative',
        ),
    ]
