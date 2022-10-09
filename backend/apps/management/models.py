from django.contrib.auth.models import User
from django.db import models


class Event(models.Model):
    name = models.CharField('название', max_length=50)
    start = models.DateTimeField('начало')
    end = models.DateTimeField('конец', blank=True, null=True)
    description = models.TextField('описание')
    payment = models.DecimalField('оплата', max_digits=8, decimal_places=2, default=0)
    users = models.ManyToManyField(
        User,
        blank=True,
        verbose_name='пользователи'
    )

    class Meta:
        verbose_name = "событие"
        verbose_name_plural = "события"

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField('название', max_length=50, unique=True)

    class Meta:
        verbose_name = "категорию"
        verbose_name_plural = "категории"

    def __str__(self):
        return self.name


class Idea(models.Model):
    STATUS_CHOICE = (
        ("новая", "Новая"),
        ("обсуждение", "Обсуждение"),
        ("исполнена", "Исполнена"),
        ("отменена", "Отменена")
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='пользователь',
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        verbose_name='категория',
    )
    name = models.CharField('название', max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField('описание')
    likes = models.PositiveIntegerField('кол-во лайков', default=0)
    user_likes = models.ManyToManyField(
        User,
        related_name='likes_user_ideas',
        blank=True,
        verbose_name='понравилось'
    )
    status = models.CharField('статус', choices=STATUS_CHOICE, default="новая", max_length=15)

    class Meta:
        verbose_name = "идею"
        verbose_name_plural = "идеи"
        ordering = ['created']

    def __str__(self):
        return self.name


class Location(models.Model):
    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        verbose_name='мероприятие'
    )
    city = models.CharField('город', max_length=20)
    street = models.CharField('улица', max_length=50)
    house = models.IntegerField('дом')

    class Meta:
        verbose_name = "адрес"
        verbose_name_plural = "адреса"

    def __str__(self):
        return self.city


class Image(models.Model):
    image = models.ImageField('изображение', upload_to="event/image/")
    event = models.ForeignKey(
        Event,
        on_delete=models.CASCADE,
        verbose_name='мероприятие'
    )

    class Meta:
        verbose_name = "изображение"
        verbose_name_plural = "изображения"

    def __str__(self):
        return self.event.name


class File(models.Model):
    file = models.FileField('файл', upload_to='user-idea-file/')
    idea = models.ForeignKey(
        Idea,
        on_delete=models.CASCADE,
        verbose_name='идея'
    )

    class Meta:
        verbose_name = "файл"
        verbose_name_plural = "файлы"

    def __str__(self):
        return self.idea.name
