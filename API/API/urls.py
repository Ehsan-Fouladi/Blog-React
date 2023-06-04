from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('home.urls')),
    path('accounts/', include('account.urls')),
    path('blog/', include("blog.urls")),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
