from django.contrib import admin

# Register your models here.
from django.contrib import admin

# Register your models here.
from api.models import Product, Category, Whislist

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ( 'name',)
    search_fields = ('name',)
    list_filter = ('name',)



admin.site.register(Whislist)
admin.site.register(Reviews)





@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price')
    search_fields = ('name', 'price')
    list_filter = ('name',)
