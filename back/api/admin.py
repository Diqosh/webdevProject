from django.contrib import admin

# Register your models here.
from django.contrib import admin

# Register your models here.
from api.models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price', 'author')
    search_fields = ('name', 'price')
    list_filter = ('name',)
