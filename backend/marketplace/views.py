from rest_framework.views import APIView
from rest_framework.response import Response
from django_elasticsearch_dsl.search import Search
from .documents import OfferDocument

class OfferSearchView(APIView):

    def get(self, request):
        query = self.request.query_params.get('q', '')
        search = OfferDocument.search().query('multi_match', query=query, fields=['title', 'description', 'location', 'certifications'])
        results = search.execute()
        return Response(results.to_dict())

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

from rest_framework.permissions import IsAuthenticated
from .models import Quotation, Offer
from .serializers import QuotationSerializer
from rest_framework import generics

class CreateQuotationView(generics.CreateAPIView):
    serializer_class = QuotationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        offer = Offer.objects.get(id=self.request.data['offer_id'])
        serializer.save(buyer=self.request.user, offer=offer)

from .models import Order, Quotation
from .serializers import OrderSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class CreateOrderFromQuotationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, quotation_id):
        try:
            quotation = Quotation.objects.get(id=quotation_id, buyer=request.user, status='accepted')
            order, created = Order.objects.get_or_create(quotation=quotation, buyer=request.user)
            if created:
                order.status = 'pending'
                order.save()
                return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'detail': 'Commande déjà existante'}, status=status.HTTP_400_BAD_REQUEST)
        except Quotation.DoesNotExist:
            return Response({'detail': 'Devis non trouvé ou non accepté'}, status=status.HTTP_404_NOT_FOUND)
