from .models import Letter
from .serializers import LetterSerializer
from rest_framework import generics


class LetterCreate(generics.ListCreateAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer


class LetterDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'hex_id'
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
