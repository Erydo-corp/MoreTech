from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.contrib.auth.models import User
from .models import Wallet
from .services import new_wallet


@receiver(post_save, sender=User)
def create_user_wallet(sender, instance, created, **kwargs):
    if created:
        if instance.is_staff:
            private_key, public_key = (
                settings.WALLET_API_PRIVATE_KEY,
                settings.WALLET_API_PUBLIC_KEY
            )
        else:
            private_key, public_key = new_wallet()

        Wallet.objects.create(
            user=instance,
            private_key=private_key,
            public_key=public_key
        )
