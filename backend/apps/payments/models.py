from django.db import models

from django.contrib.auth.models import User

from .services import get_balance, get_status


class Wallet(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name='пользователь',
        related_name='wallet'
    )
    private_key = models.CharField(max_length=128)
    public_key = models.CharField(max_length=128)

    class Meta:
        verbose_name = "кошелек"
        verbose_name_plural = "кошельки"

    def __str__(self):
        return f'{self.user}'

    def get_balance(self):
        return get_balance(self.public_key)

    def get_nfts(self):
        pass

    def get_history(self):
        pass



class Transaction(models.Model):
    TYPE_CHOICE = (
        ("digital_rubles", "Цифровые рубли"),
        ("matic", "Matic"),
        ("nft", "NFT")
    )
    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='отправитель',
        related_name='sent_transactions'
    )
    receiver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='получатель',
        related_name='recieved_transactions'
    )
    transaction_type = models.CharField(
        'тип транзакции',
        choices=TYPE_CHOICE,
        max_length=32
    )
    transaction_hash = models.CharField(
        max_length=128
    )
    amount = models.DecimalField(
        'Сумма (для денег)',
        max_digits=8,
        decimal_places=2,
        default=0,
        blank=True,
    )
    token_id = models.PositiveIntegerField(
        'Token ID (для NFT)',
        blank=True,
    )
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "транзакция"
        verbose_name_plural = "транзакции"

    def __str__(self):
        return f'{self.sender} -> {self.receiver}'

    @property
    def status(self):
        return get_status(self.transaction_hash)
