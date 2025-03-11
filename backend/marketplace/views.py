
# Create your views here.
from rest_framework import generics, filters
from .models import Offer
from .serializers import OfferSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class OfferList(generics.ListCreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = [AllowAny]

    # Ajoute la recherche avancée simple
    filterset_fields = ['location', 'certifications', 'capacity']
    search_fields = ['title', 'description', 'location', 'certifications', 'capacity']

class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = [IsAuthenticated]

