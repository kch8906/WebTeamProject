# Generated by Django 3.2.5 on 2022-03-02 18:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('probbs', '0002_question_comments'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='question',
            options={'permissions': [('can_create_doctor', 'Can Create a Doctor')]},
        ),
    ]
