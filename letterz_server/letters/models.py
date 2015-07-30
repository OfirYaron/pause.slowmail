import os
import binascii

from django.db import models


def random_hex():
    """
    This function generate 10 character long hexa string.
    http://stackoverflow.com/q/16853815/1224456.
    """
    return binascii.hexlify(os.urandom(5))


class Letter(models.Model):
    sender = models.EmailField()
    recipient = models.EmailField()
    content = models.TextField()
    hex_id = models.CharField(max_length=10,
                              default=random_hex,
                              blank=True,
                              unique=True)
