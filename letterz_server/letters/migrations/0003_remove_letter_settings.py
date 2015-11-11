# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('letters', '0002_auto_20150731_1121'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='letter',
            name='settings',
        ),
    ]
