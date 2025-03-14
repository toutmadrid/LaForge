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

from .views import CreateOrderFromQuotationView

urlpatterns += [
    path('orders/create/<int:quotation_id>/', CreateOrderFromQuotationView.as_view(), name='create-order'),
]

from .views import PaymentView

urlpatterns += [
    path('orders/pay/<int:order_id>/', PaymentView.as_view(), name='pay-order'),
]

from .views import CreateDisputeView, ListUserDisputesView

urlpatterns += [
    path('disputes/create/', CreateDisputeView.as_view(), name='create-dispute'),
    path('disputes/my/', ListUserDisputesView.as_view(), name='my-disputes'),
]
