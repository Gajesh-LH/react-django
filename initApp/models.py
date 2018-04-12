from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Notes(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=200)
    userId = models.ForeignKey(User)


    def __str__(self):
        return self.title