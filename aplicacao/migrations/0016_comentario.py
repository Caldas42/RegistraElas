# Generated by Django 5.1.1 on 2024-11-28 14:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacao', '0015_cadastros_disponibilidade_cadastros_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.TextField()),
                ('data_criacao', models.DateTimeField(auto_now_add=True)),
                ('colaborador', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='aplicacao.cadastros')),
            ],
        ),
    ]
