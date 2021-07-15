from django.conf import settings
from django.db import models


class ToDoItem(models.Model):
    "Generated Model"
    toDoName = models.CharField(
        max_length=256,
    )
    toDoDate = models.DateTimeField()
    toDoDescription = models.TextField()


# Create your models here.
