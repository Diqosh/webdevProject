from django.http import Http404
from django.shortcuts import render
from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response

from api.models import Product, Category, Whislist
from api.serializers import ProductSerializer, CategorySerializer, WhishlistSerializer


@api_view(['GET', 'POST'])
def productList(request):
    if request.method == 'GET':
        categories = Product.objects.all()

        serializer = ProductSerializer(categories, many=True)
        # categoreis_json = [category.to_json() for category in categories]
        return Response(serializer.data)
    elif request.method == 'POST':
        # json string to dict

        serializer = ProductSerializer(data=request.data)


        if serializer.is_valid():
            # call create function
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'POST'])
def whislistList(request, user_id):
    if request.method == 'GET':
        objs = Whislist.objects.filter(user=user_id)

        serializer = WhishlistSerializer(objs, many=True)
        # categoreis_json = [category.to_json() for category in categories]
        return Response(serializer.data)
    elif request.method == 'POST':
        # json string to dict

        serializer = WhishlistSerializer(data=request.data)


        if serializer.is_valid():
            # call create function
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class categoryDetailAPIViews(APIView):
    def get_object(self, id):
        try:
            return Product.objects.get(pk=id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, reqeust, id=None):
        cat = self.get_object(id)
        serializer = ProductSerializer(cat)
        return Response(serializer.data)

    def put(self, reqeust, id=None):
        cat = self.get_object(id)
        serializer = ProductSerializer(instance=cat, data=reqeust.data)
        if serializer.is_valid():
            # call create function
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, reqeust, id=None):
        vacancy = self.get_object(id)
        vacancy.delete()
        return Response({'message': 'deleted'}, status=204)


@api_view(['GET', 'POST'])
def categoryList(request):
    if request.method == 'GET':
        categories = Category.objects.all()

        serializer = CategorySerializer(categories, many=True)
        # categoreis_json = [category.to_json() for category in categories]
        return Response(serializer.data)
    elif request.method == 'POST':
        # json string to dict

        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            # call create function
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


