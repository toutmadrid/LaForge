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
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    quotation = models.OneToOneField('Quotation', on_delete=models.CASCADE, related_name='order')
    status = models.CharField(max_length=50, default='pending')  # pending, processing, delivered
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Commande {self.id} - {self.status}'


# Create your models here.
class Quotation(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quotations')
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='quotations')
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    status = models.CharField(max_length=50, default='pending')  # pending, accepted, rejected
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.total_price = self.quantity * self.offer.price_per_unit
        super().save(*args, **kwargs)

    def __str__(self):
        return f'Devis {self.id} - {self.offer.title}'
