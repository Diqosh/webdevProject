from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from api.models import Product, Category


class ProductSerializer(serializers.ModelSerializer):


    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'author')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

