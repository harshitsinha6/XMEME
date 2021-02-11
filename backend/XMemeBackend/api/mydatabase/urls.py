
from rest_framework import routers
from django.urls import path, include

from . import views

router = routers.DefaultRouter()
router.register(r'view-data/memes', views.mydatabaseViewSet)

urlpatterns = [
    path('create-data/memes/', views.createData, name = "create-data"),
    path('', include(router.urls))
]