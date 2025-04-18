# Generated by Django 5.1.7 on 2025-03-14 18:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_quotation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='offer',
        ),
        migrations.RemoveField(
            model_name='order',
            name='quantity',
        ),
        migrations.RemoveField(
            model_name='order',
            name='total_price',
        ),
        migrations.AddField(
            model_name='order',
            name='quotation',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='order', to='marketplace.quotation'),
            preserve_default=False,
        ),
    ]
