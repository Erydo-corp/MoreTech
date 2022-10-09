from rest_framework import serializers

from . import models
from ..account.serializers import UserSerializer


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


class BalanceSerializer():
    pass
