from django.db import models
from django.contrib.auth.models import AbstractUser

class Client(models.Model):
    tenant_id = 'id'
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=255, blank=True)
    email = models.CharField(max_length=50, unique=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    client = models.ForeignKey(Client, blank=True, null=True, on_delete=models.SET_NULL)
    tenant_id='client_id'
    account = models.BooleanField(default=False)

    def __str__(self):
        return self.username
