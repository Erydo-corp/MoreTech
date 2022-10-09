from rest_framework import serializers
from django.contrib.auth.models import User

from . import models


class TransactionSerializer(serializers.ModelSerializer):
    transaction_hash = serializers.ReadOnlyField()

    class Meta:
        model = models.Transaction
        fields = [
            "id",
            "transaction_type",
            "receiver",
            "amount",
            "token_id",
            "transaction_hash"
        ]


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Wallet
        fields = [
            "id",
            "public_key"
        ]


class UserWalletSerializer(serializers.ModelSerializer):
    wallet = WalletSerializer()
    class Meta:
        model = User
        fields = [
            "id",
            "wallet"
        ]


class TransactionDetailSerializer(serializers.ModelSerializer):
    receiver = UserWalletSerializer()
    sender = UserWalletSerializer()

    class Meta:
        model = models.Transaction
        fields = [
            "id",
            "transaction_type",
            "sender",
            "receiver",
            "amount",
            "token_id",
            "transaction_hash",
            "status",
            "uri",
            "nft_amount"
        ]


class GenerateNFTSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = [
            "id",
            "receiver",
            "nft_amount",
            "uri",
            "transaction_hash"
        ]


