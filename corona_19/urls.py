# Root URLConf(http://127.0.0.1:8000/)
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='home'),  # Home Page
    path('admin/', admin.site.urls),                                          # Admin Page
    path('main/', include('main.urls')),                                      # login 후 Home Page
    path('users/', include('users.urls')),                                    # login, 회원가입 page
    path('maps/', include('maps.urls')),
    path('bbs/', include('probbs.urls')),
] + static(settings.MEDIA_URL,
           document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
