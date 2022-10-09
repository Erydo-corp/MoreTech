from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response

from ..base.permissions import IsAuthor
from .models import Transaction, Wallet
from .services import perform_transaction
from .serializers import TransactionSerializer, BalanceSerializer


class TransactionView(ModelViewSet):
	serializer_class = TransactionSerializer

	def get_queryset(self):
		user = self.request.user
		queryset = Transaction.objects.filter(
			Q(sender=user) | Q(receiver=user)
		)
		return queryset

	def perform_create(self, serializer):
		sender = self.request.user
		sender_private_key = sender.wallet.private_key
		receiver = serializer.validated_data.get('receiver')
		amount = serializer.validated_data.get('amount') \
			  or serializer.validated_data.get('token_id')
		transaction_type = serializer.validated_data.get('transaction_type')

		receiver_wallet = Wallet.objects.get(user=receiver)
		transaction_hash = perform_transaction(
			sender_private_key,
			receiver_wallet.public_key,
			amount,
			transaction_type
		)

		serializer.save(
			sender=sender,
			receiver=receiver,
			transaction_hash=transaction_hash,
			transaction_type=transaction_type,
			amount=amount
		)


class TransactionDetailView(APIView):
	queryset = User.objects.all()

	def get(self, request):
		pass


class UserBalanceView(APIView):
	queryset = User.objects.all()

	def get(self, request):
		wallet = Wallet.objects.get(user=request.user.id)
		balance_json = wallet.get_balance()
		return Response(balance_json, status=200)
