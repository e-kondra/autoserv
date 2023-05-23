from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Order, Consumption, Brand
from .serializer import OrderModelSerializer, ConsumptionModelSerializer, BrandModelSerializer


class OrderModelViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderModelSerializer


class BrandModelViewSet(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandModelSerializer


class ConsumptionModelViewSet(ModelViewSet):
    queryset = Consumption.objects.all()
    serializer_class = ConsumptionModelSerializer

