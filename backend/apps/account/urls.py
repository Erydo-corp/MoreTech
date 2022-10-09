from django.urls import path, include, re_path

from .views import UserViewSet, GroupView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    path("users/", UserViewSet.as_view({"get": "list"})),
    path("user/<int:pk>/", UserViewSet.as_view({"get": "retrieve"})),
    path("groups/", GroupView.as_view({"get": "list"})),
    path("group/<int:pk>/", GroupView.as_view({"get": "retrieve"}))
]
