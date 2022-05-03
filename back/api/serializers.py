from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from api.models import Product, Category, Whislist


class ProductSerializer(serializers.ModelSerializer):


    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class WhishlistSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer(many=True)

    class Meta:
        model = Whislist

        fields = '__all__'

