from rest_framework.serializers import ModelSerializer
from django.contrib.auth.hashers import make_password

from .models import User


class UserModelSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

    validate_password = make_password