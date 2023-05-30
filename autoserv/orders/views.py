from django.shortcuts import render
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import Order, Consumption, Brand
from .serializer import OrderModelSerializer, ConsumptionModelSerializer, BrandModelSerializer
from .filter import OrderFilter


class OrderModelViewSet(CreateModelMixin, RetrieveModelMixin,
                        UpdateModelMixin, DestroyModelMixin,
                        ListModelMixin, GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderModelSerializer
    filterset_class = OrderFilter


class BrandCustomModelViewSet(ListModelMixin, GenericViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandModelSerializer


class ConsumptionCustomModelViewSet(CreateModelMixin, RetrieveModelMixin,
                                UpdateModelMixin, DestroyModelMixin,
                                ListModelMixin, GenericViewSet):
    queryset = Consumption.objects.filter(is_actual=True)
    serializer_class = ConsumptionModelSerializer
