from django.urls import path

from . import views

urlpatterns = [
    path('user/<int:pk>/transaction/', views.TransactionView.as_view({'get': 'list', 'post': 'create'})),
    path('transaction/<int:pk>/', views.TransactionDetailView.as_view()),

    path('user/<int:pk>/balance/', views.UserBalanceView.as_view()),
    path('user/<int:pk>/balance-history/', views.UserBalanceHistoryView.as_view()),

    path('generate-nfts/', views.GenerateNFTView.as_view())
]