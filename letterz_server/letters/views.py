from datetime import datetime, timedelta

from django.conf import settings

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
        till_sending = 24 * 3 * settings.SECONDS_IN_HOUR
        sending_datetime = datetime.now() + timedelta(seconds=till_sending)
        scheduler = django_rq.get_scheduler()
        scheduler.enqueue_at(sending_datetime, mail.send_letter, letter)


class LetterDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'hex_id'
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
