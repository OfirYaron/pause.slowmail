# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import letters.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Letter',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('sender', models.EmailField(max_length=254)),
                ('recipient', models.EmailField(max_length=254)),
                ('content', models.TextField()),
                ('hex_id', models.CharField(default=letters.models.random_hex, max_length=10)),
            ],
        ),
    ]
