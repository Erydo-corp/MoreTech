from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .yasg import urlpatterns as docs

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/shop/', include('apps.shop.urls')),
    path('api/v1/account/', include('apps.account.urls')),
    path('api/v1/management/', include('apps.management.urls')),
    path('api/v1/social/', include('apps.social.urls')),
    path('api/v1/payments/', include('apps.payments.urls')),
]
urlpatterns += docs

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
