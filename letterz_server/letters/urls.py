from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<hex_id>[0-9a-f]+)/$', views.LetterDetail.as_view(), name='detail'),
    url(r'^$', views.LetterCreate.as_view(), name='create'),
]
