from django.urls import path, include
from rest_framework.authtoken import views
from .views import home
from . import views

urlpatterns = [
    path('', home, name = 'api.home'),
    path('mydatabase/', include('api.mydatabase.urls'))

]