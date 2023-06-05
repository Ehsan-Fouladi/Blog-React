from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings
from rest_framework.schemas import get_schema_view
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    # path('', include('home.urls')),
    path('accounts/', include('account.urls')),
    path('blog/', include("blog.urls")),
    path('api/', SpectacularAPIView.as_view(), name='schema'),
    path('', SpectacularSwaggerView.as_view()),
    path('api/schema/redoc/', SpectacularRedocView.as_view()),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
