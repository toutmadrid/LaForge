from django.urls import path
from .views import OfferList, OfferSearchView

urlpatterns = [
    path('offers/', OfferList.as_view(), name='offers-list'),
    path('offers/search/', OfferSearchView.as_view(), name='offers-search'),
]

from .views import CreateQuotationView

urlpatterns = [
    path('quotations/create/', CreateQuotationView.as_view(), name='create-quotation'),
]
