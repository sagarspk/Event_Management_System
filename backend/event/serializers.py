from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        field = '__all__'