from django_filters import rest_framework as filters
from .models import Order


class OrderFilter(filters.FilterSet):
    date_end = filters.DateRangeFilter()

    class Meta:
        model = Order
        fields = ['date_end']


# details: https://django-filter.readthedocs.io/en/latest/ref/filters.html
# can use: f =  OrderFilter({'date_end_after': date_after, 'date_end_before': date_before }) or just one of  date_end_after,  date_end_before