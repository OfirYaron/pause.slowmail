from rest_framework import serializers

from .models import Letter


class LetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Letter
        fields = ('from_name', 'from_email', 'to_name', 'to_email',
                  'content', 'settings')
