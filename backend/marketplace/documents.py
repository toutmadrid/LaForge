from django_elasticsearch_dsl import Document, Index
from .models import Offer

offers = Index('offers')

@offers.doc_type
class OfferDocument(Document):
    class Django:
        model = Offer
        fields = [
            'title',
            'description',
            'location',
            'certifications',
            'capacity',
        ]
