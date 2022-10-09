from django.urls import path

from . import views

urlpatterns = [
    path('products/', views.ProductView.as_view({'get': 'list'})),

    path('cart/', views.CartView.as_view({'get': 'list', 'post': 'create'})),
    path('cart/<int:pk>/', views.CartView.as_view({'put': 'update', 'delete': 'destroy'})),

    path('order/', views.OrderView.as_view({'get': 'list', 'post': 'create'})),
    path('order/<int:pk>/', views.OrderView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
]
