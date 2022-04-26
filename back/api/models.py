from django.db import models
from django.conf import settings


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=1000)


class Product(models.Model):
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
