from django.shortcuts import render
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.pagination import LimitOffsetPagination

from .models import User
from .serializer import UserModelSerializer


class UserLimitOfPagination(LimitOffsetPagination):
    default_limit = 20


class UserModelViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer
    # pagination_class = UserLimitOfPagination
