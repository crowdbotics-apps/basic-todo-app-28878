from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ToDoItemViewSet

router = DefaultRouter()
router.register("todoitem", ToDoItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
