from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=12)
    address = models.CharField(max_length=1000)
    is_entity = models.BooleanField
    client_code = models.CharField(max_length=11)
    pvm = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name} {self.last_name}'

