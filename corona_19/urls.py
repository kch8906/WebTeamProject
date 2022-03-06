# Root URLConf(http://127.0.0.1:8000/)
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),                                          # Admin Page
    path('', TemplateView.as_view(template_name='index.html'), name='home'),  # Home Page
    path('main/', include('main.urls')),                                      # login 후 Home Page
    path('users/', include('users.urls')),                                    # login, 회원가입 page
    path('maps/', include('maps.urls')),                                      # Maps Page
    path('guide/', include('guide.urls')),                                    # Guide Page(코로나 증상 및 예방 조치)
    path('diagnosis/', include('diagnosis.urls')),                            # Diagnosis Page(자가진단)
    # path('probbs/', include('probbs.urls')),                                        # Pro BBS Page(전문의에게 물어보세요 게시판)
] + static(settings.MEDIA_URL,
           document_root=settings.MEDIA_ROOT)
           
if settings.DEBUG:
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns