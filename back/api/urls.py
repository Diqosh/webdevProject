from django.urls import path


from api.views import ProductsListAPIView


urlpatterns = [
    path('products/',ProductsListAPIView.as_view()),

]