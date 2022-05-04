from django.db import models
from django.conf import settings


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=1000)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name

class Reviews(models.Model):
    name = models.CharField(max_length=200)


class Product(models.Model):
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000, null=True, blank=True)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    reviews = models.ManyToManyField(Reviews, blank=True, null=True)


    def __str__(self):
        return self.name


class Whislist(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    product_id = models.ManyToManyField(Product)

    def __str__(self):
        return str(self.user)


