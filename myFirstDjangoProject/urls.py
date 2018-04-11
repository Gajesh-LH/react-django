
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import viewsets, routers

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
