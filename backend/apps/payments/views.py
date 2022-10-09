from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from ..base.permissions import IsAuthor
from .models import Transaction, Wallet
from .services import perform_transaction, generate_nfts
from .serializers import TransactionSerializer, TransactionDetailSerializer, GenerateNFTSerializer


class TransactionView(ModelViewSet):
    serializer_class = TransactionSerializer

    def get_queryset(self):
        user = User.objects.get(pk=self.kwargs.get('pk'))
        queryset = Transaction.objects.filter(
            Q(sender=user) | Q(receiver=user)
        )
        return queryset

    def perform_create(self, serializer):
        sender = User.objects.get(pk=self.kwargs.get('pk'))
        sender_private_key = sender.wallet.private_key
        receiver = serializer.validated_data.get('receiver')
        amount = serializer.validated_data.get('amount')
        token_id = serializer.validated_data.get('token_id')
        transaction_type = serializer.validated_data.get('transaction_type')

        receiver_wallet = Wallet.objects.get(user=receiver)
        transaction_hash = perform_transaction(
            sender_private_key,
            receiver_wallet.public_key,
            (token_id or float(amount)),
            transaction_type
        )

        serializer.save(
            sender=sender,
            receiver=receiver,
            transaction_hash=transaction_hash,
            transaction_type=transaction_type,
            amount=amount,
            token_id=token_id
        )


class TransactionDetailView(RetrieveAPIView):
    serializer_class = TransactionDetailSerializer
    queryset = Transaction.objects.all()
        


class UserBalanceView(APIView):
    queryset = User.objects.all()

    def get(self, request, **kwargs):
        user = User.objects.get(pk=kwargs.get('pk'))
        wallet = Wallet.objects.get(user=user)
        balance_json = wallet.get_balance()
        nfts_json = wallet.get_nfts()

        balance_json['nfts'] = nfts_json['balance']
        return Response(balance_json, status=200)


class UserBalanceHistoryView(APIView):
    queryset = User.objects.all()

    def get(self, request, **kwargs):
        user = User.objects.get(pk=kwargs.get('pk'))
        wallet = Wallet.objects.get(user=user)
        history_json = wallet.get_history()
        return Response(history_json, status=200)


class GenerateNFTView(CreateAPIView):
    serializer_class = GenerateNFTSerializer
    permission_classes = [IsAdminUser]

    def perform_create(self, serializer):
        sender = self.request.user
        public_key = Wallet.objects.get(
            user=serializer.validated_data['receiver']
        ).public_key
        transaction_json = generate_nfts(
            public_key,
            serializer.validated_data['uri'],
            serializer.validated_data['nft_amount']
        )

        serializer.save(
            sender=sender,
            transaction_hash=transaction_json['transaction_hash']
        )

