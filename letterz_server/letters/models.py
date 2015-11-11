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
    from_name = models.CharField(max_length=50)
    from_email = models.EmailField()
    to_name = models.CharField(max_length=50)
    to_email = models.EmailField()
    content = models.TextField()  # Should be JSON, but...
    hex_id = models.CharField(max_length=10,
                              default=random_hex,
                              blank=True,
                              unique=True)

    def __str__(self):
        return 'Letter {}'.format(self.hex_id)
