from django.contrib.auth.models import User
from django.db import models


class Achievement(models.Model):
    icon = models.ImageField('иконка', upload_to='achievements/')
    name = models.CharField("название", max_length=50)
    description = models.TextField('описание', blank=True, null=True)

    class Meta:
        verbose_name = "достижение"
        verbose_name_plural = "достижения"

    def __str__(self):
        return self.name


class Position(models.Model):
    name = models.CharField("название должности", max_length=25)

    class Meta:
        verbose_name = "должность",
        verbose_name_plural = "должности"

    def __str__(self):
        return self.name


class Account(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name='пользователь'
    )
    avatar = models.ImageField(
        upload_to="profile/avatar/",
        verbose_name='Аватар',
        blank=True,
        null=True
    )
    birthday = models.DateField('дата рождения', blank=True, null=True)
    bio = models.TextField('о себе', blank=True, null=True)
    city = models.CharField('город', max_length=20)
    position = models.ForeignKey(
        Position,
        on_delete=models.CASCADE,
        verbose_name='должность',
        blank=True,
        null=True
    )
    achievements = models.ManyToManyField(
        Achievement,
        blank=True,
        verbose_name='достижения'
    )

    class Meta:
        verbose_name = "профиль"
        verbose_name_plural = "профили"

    def __str__(self):
        return self.user.username


# Заменить профиль на руководитель
class EmployeeGroup(models.Model):
    name = models.CharField('название', max_length=50)
    profile = models.ForeignKey(Account, on_delete=models.CASCADE)
    user = models.ManyToManyField(User)

    def __str__(self):
        return self.name
