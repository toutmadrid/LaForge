from rest_framework import serializers
from .models import Offer

class OfferSerializer(serializers.ModelSerializer):
    supplier = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Offer
        fields = '__all__'
