"""letterz_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.http import HttpResponseRedirect


def redirect_to_index(request):
    return HttpResponseRedirect('index.html/')


urlpatterns = [
    url(r'^admin/django-rq/', include('django_rq.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('letters.urls')),
    url(r'^$', redirect_to_index),
    # Statics (including htmls from frontend)
    url(r'^(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'static'})
]
