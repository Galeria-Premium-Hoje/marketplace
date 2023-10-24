from django.db import models
from client.models import Client, CustomUser

class Ad(models.Model):
    client = models.ForeignKey(
        Client, 
        blank=True, 
        null=True, 
        on_delete=models.SET_NULL
    )
    tenant_id = 'client_id'
    category = models.CharField(max_length=100)
    subcategory = models.CharField(max_length=100)
    postcode = models.CharField(max_length=100)
    individual_type = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    offer_type = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    full_address = models.CharField(max_length=100)
    photos = models.ManyToManyField(
        'Photo',
        related_name='photos',
    )
    phones = models.ManyToManyField(
        'Phone',
        related_name='phones',
        db_table='',
        db_constraint=True
    )

class Photo(models.Model):
    client = models.ForeignKey(
        Client, blank=True, null=True, on_delete=models.SET_NULL)
    tenant_id = 'client_id'
    photo = models.CharField(max_length=100)

class Phone(models.Model):
    client = models.ForeignKey(
        Client, blank=True, null=True, on_delete=models.SET_NULL)
    tenant_id = 'client_id'
    phone = models.CharField(max_length=100)
    visibility = models.CharField(max_length=100)
 


