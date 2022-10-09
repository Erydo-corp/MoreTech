from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Account, Achievement, EmployeeGroup


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            "id",
            "icon",
            "name",
            "description"
        ]


class EmployeeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
        ]


class EmployeeAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = [
            "avatar",
        ]


class EmployeeGroupSerializer(serializers.ModelSerializer):
    user = EmployeeUserSerializer(many=True)

    class Meta:
        model = EmployeeGroup
        fields = [
            "id",
            "profile",
            "user",
        ]


class AccountSerializer(serializers.ModelSerializer):
    position = serializers.CharField()

    class Meta:
        model = Account
        fields = [
            "avatar",
            "birthday",
            "bio",
            "city",
            "position",
            "achievements",
            # "employee",
        ]
        ref_name = 'account_profile'


class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()

    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "account",

        ]
        ref_name = 'account_user'

    def create(self, validated_data):
        account_data = validated_data.pop('account')
        user = User.objects.create(**validated_data)
        Account.objects.create(user=user, **account_data)
        return user
