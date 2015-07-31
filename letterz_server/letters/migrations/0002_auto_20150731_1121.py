# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import letters.models


class Migration(migrations.Migration):

    dependencies = [
        ('letters', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='letter',
            old_name='sender',
            new_name='from_email',
        ),
        migrations.RenameField(
            model_name='letter',
            old_name='recipient',
            new_name='to_email',
        ),
        migrations.AddField(
            model_name='letter',
            name='from_name',
            field=models.CharField(default='sender name', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='letter',
            name='settings',
            field=models.TextField(default='{}'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='letter',
            name='to_name',
            field=models.CharField(default='recipient name', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='letter',
            name='hex_id',
            field=models.CharField(blank=True, unique=True, default=letters.models.random_hex, max_length=10),
        ),
    ]
