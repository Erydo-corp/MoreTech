from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet

from .models import EmployeeGroup
from .serializers import UserSerializer, EmployeeGroupSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupView(ModelViewSet):
    queryset = EmployeeGroup.objects.all()
    serializer_class = EmployeeGroupSerializer


class ActiveUserView(ModelViewSet):
    pass


class TopUserView(ModelViewSet):
    pass
