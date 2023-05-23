from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Client
from .serializer import ClientModelSerializer


class ClientModelViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientModelSerializer
