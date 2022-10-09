from django.contrib import admin

from .models import Account, Achievement, Position, EmployeeGroup


@admin.register(Account)
class ProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    pass


@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    pass


@admin.register(EmployeeGroup)
class EmployeeGroupAdmin(admin.ModelAdmin):
    pass
