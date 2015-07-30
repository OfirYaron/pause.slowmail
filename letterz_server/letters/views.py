from rest_framework import generics
import django_rq

from .models import Letter
from .serializers import LetterSerializer
from . import mail

class LetterCreate(generics.ListCreateAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer

    def perform_create(self, serializer):
        letter = serializer.save()
        django_rq.enqueue(mail.send_imidiate_notifications, letter)


class LetterDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'hex_id'
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
