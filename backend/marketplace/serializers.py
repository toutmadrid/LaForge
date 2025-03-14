from rest_framework import serializers
from .models import Offer

class OfferSerializer(serializers.ModelSerializer):
    supplier = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Offer
        fields = '__all__'

from .models import Quotation

class QuotationSerializer(serializers.ModelSerializer):
    buyer = serializers.StringRelatedField(read_only=True)
    offer = OfferSerializer(read_only=True)

    class Meta:
        model = Quotation
        fields = '__all__'
