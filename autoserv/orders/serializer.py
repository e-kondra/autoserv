from rest_framework.serializers import ModelSerializer

from .models import Brand, Consumption, Order


class BrandModelSerializer(ModelSerializer):

    class Meta:
        model = Brand
        fields = '__all__'


class ConsumptionModelSerializer(ModelSerializer):

    class Meta:
        model = Consumption
        fields = '__all__'


class OrderModelSerializer(ModelSerializer):

    consumptions = ConsumptionModelSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'