from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Event
from .serializers import EventSerializer

class AddEvent(APIView):
    def post(self,request):
        data = request.data
        serializer = EventSerializer(data)
        if serializer.is_valid():
            serializer.save()
            return Response('Event added successfully', status = status.HTTP_200_OK)
        else:
            return Response('Event creation failed', status=status.HTTP_400_BAD_REQUEST)


class UploadImage(APIView):
    def post(self,request):
        data = request.data['image']
        event = Event.objects.get(id=id)
        event.image=data
        return Response('Image updated successfully', status= status.HTTP_200_OK)
