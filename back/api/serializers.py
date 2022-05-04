from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from api.models import Product, Category, Whislist, Reviews


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

class ReviewSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        review = Reviews.objects.create(name=validated_data.get('name'))
        return review

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

class CategorySerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category