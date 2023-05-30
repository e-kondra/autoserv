from django.db import models
from clients.models import Client


class Brand(models.Model):
    # class car models
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Consumption(models.Model):
    # class orders consumptions
    description = models.TextField
    summa = models.FloatField
    is_actual = models.BooleanField(default=True)


class Order(models.Model):
    date_create = models.DateField
    date_end = models.DateField(blank=True)
    car_brand = models.OneToOneField(Brand, on_delete=models.CASCADE)
    car_model = models.CharField(max_length=100, blank=True)
    car_comment = models.TextField(blank=True)
    consumptions = models.ManyToManyField(Consumption, blank=True)
    client = models.OneToOneField(Client, blank=True, on_delete=models.CASCADE)
    clients_str = models.CharField(max_length=100, blank=True)
    total = models.FloatField(default=0)
    comment = models.TextField(blank=True)
    is_actual = models.BooleanField(default=True)




