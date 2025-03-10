from django.db import models
from users.models import User

# Modèle Offre (capacité industrielle)
class Offer(models.Model):
    supplier = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    location = models.CharField(max_length=100)
    certifications = models.CharField(max_length=100, blank=True)
    capacity = models.CharField(max_length=100)
    price_per_unit = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Modèle Commande
class Order(models.Model):
    buyer = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, default='pending') # pending, confirmed, completed
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Order {self.id} - {self.status}'

# Create your models here.
