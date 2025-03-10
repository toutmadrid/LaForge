from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_buyer = models.BooleanField(default=False)
    is_supplier = models.BooleanField(default=False)
    company_name = models.CharField(max_length=100, blank=True, null=True)


# Create your models here.
