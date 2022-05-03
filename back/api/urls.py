from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from api.views import productList, categoryList, categoryDetailAPIViews, whislistList

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('products/', productList),
    path('products/<int:id>', categoryDetailAPIViews.as_view()),
    path('whishlist/<int:user_id>', whislistList),
    
    path('categories/', categoryList),

]
