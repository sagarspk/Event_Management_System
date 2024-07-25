from django.urls import path
from .views import AddEvent

urlpatterns = [
    path('addevent',AddEvent.as_view(), name = 'add_event'),
]