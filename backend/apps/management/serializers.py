from rest_framework import serializers
from django.contrib.auth.models import User

from . import models
from apps.account.models import Account


class AccountSerializer(serializers.ModelSerializer):
    position = serializers.CharField()

    class Meta:
        model = Account
        fields = [
            "avatar",
            "position",
        ]
        ref_name = 'board_profile'


class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "account"
        ]
        ref_name = 'board_user'

    def create(self, validated_data):
        account_data = validated_data.pop('account')
        user = User.objects.create(**validated_data)
        Account.objects.create(user=user, **account_data)
        return user


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Location
        fields = [
            "city",
            "street",
            "house"
        ]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = [
            "id",
            "image"
        ]


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.File
        fields = [
            "id",
            "file"
        ]


class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = [
            "id",
            "name",
            "start",
            "end",
            "description"
        ]


class EventDetailSerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    image = ImageSerializer()

    class Meta:
        model = models.Event
        fields = [
            "id",
            "name",
            "start",
            "end",
            "description",
            "location",
            "payment",
            "image",
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Idea
        fields = [
            "id",
            "name"
        ]
        ref_name = 'board_category'


class IdeaListSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    # file = FileSerializer()
    category = CategorySerializer()

    class Meta:
        model = models.Idea
        fields = [
            "id",
            "user",
            "category",
            "name",
            "created",
            "description",
            "likes",
            "user_likes",
            "status",
            # "file",
        ]
