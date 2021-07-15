from rest_framework import authentication
from todoList.models import ToDoItem
from .serializers import ToDoItemSerializer
from rest_framework import viewsets


class ToDoItemViewSet(viewsets.ModelViewSet):
    serializer_class = ToDoItemSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ToDoItem.objects.all()
