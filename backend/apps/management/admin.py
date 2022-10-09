from django.contrib import admin

from .models import Idea, Location, Event, Image, Category


class LocationTabInlines(admin.TabularInline):
    model = Location
    extra = 1


class ImageTabInlines(admin.TabularInline):
    model = Image
    extra = 1


@admin.register(Idea)
class IdeaAdmin(admin.ModelAdmin):
    pass


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [LocationTabInlines, ImageTabInlines]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass
