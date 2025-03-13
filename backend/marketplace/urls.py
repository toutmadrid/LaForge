from django.urls import path
from .views import OfferList, OfferSearchView

urlpatterns = [
    path('offers/', OfferList.as_view(), name='offers-list'),
    path('offers/search/', OfferSearchView.as_view(), name='offers-search'),
]
