from django.contrib import admin
from .models import Item


@admin.register(Item)
class ToyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'stock')
