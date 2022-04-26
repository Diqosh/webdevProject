from django.contrib import admin

# Register your models here.
from django.contrib import admin

# Register your models here.
from api.models import Product, Category

@admin.register(Category)
class ProductAdmin(admin.ModelAdmin):
    list_display = ( 'name',)
    search_fields = ('name',)
    list_filter = ('name',)




@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price', 'author')
    search_fields = ('name', 'price')
    list_filter = ('name',)
