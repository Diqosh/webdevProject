from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from rest_framework.decorators import APIView
from rest_framework.response import Response

from api.models import Product
from api.serializers import ProductSerializer


class ProductsListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)