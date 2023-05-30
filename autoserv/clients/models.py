from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=12, blank=True)
    address = models.CharField(max_length=1000, blank=True)
    email = models.EmailField(blank=True)
    is_entity = models.BooleanField(default=False)
    client_code = models.CharField(max_length=11, blank=True)
    pvm = models.CharField(max_length=20, blank=True)
    is_actual = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name} {self.last_name}'

