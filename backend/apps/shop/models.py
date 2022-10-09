from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """Категория"""
    name = models.CharField("название", max_length=50, unique=True)

    class Meta:
        verbose_name = "категорию"
        verbose_name_plural = "категории"

    def __str__(self):
        return self.name


class Product(models.Model):
    """Товар"""
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        verbose_name='категория'
    )
    name = models.CharField("название", max_length=50)
    image = models.ImageField("изображение", upload_to="product/image/", blank=True, null=True)
    description = models.TextField("описание", blank=True, null=True)
    price = models.DecimalField("цена", max_digits=8, decimal_places=2, default=0)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "товар"
        verbose_name_plural = "товары"

    def __str__(self):
        return self.name


class Order(models.Model):
    """Заказ"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='пользователь',
    )
    address = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'

    def __str__(self):
        return 'Order {}'.format(self.id)

    @property
    def total_cost(self):
        return sum(item.get_cost() for item in self.items.all())


class OrderItem(models.Model):
    """Позиция в заказе"""
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='items'
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='order_items'
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return '{}'.format(self.id)

    def get_cost(self):
        return self.price * self.quantity


class Cart(models.Model):
    """Корзина пользователя"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name='пользователь',
    )

    class Meta:
        verbose_name = "корзину"
        verbose_name_plural = "корзины"

    def __str__(self):
        return self.user.username

    @property
    def total_cost(self):
        return sum(item.get_cost() for item in self.items.all())

    def clear(self):
        self.items.all().delete()


class CartItem(models.Model):
    """Позиция в корзине"""
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        verbose_name="корзина",
        related_name="items"
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        verbose_name="товар"
    )
    quantity = models.IntegerField(
        default=1,
        verbose_name="количество"
    )

    class Meta:
        verbose_name = "товар в корзине"
        verbose_name_plural = "товары в корзине"

    def get_cost(self):
        return self.product.price * self.quantity
