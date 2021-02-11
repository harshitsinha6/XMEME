
from rest_framework import viewsets
from .serializers import mydatabaseSerializer
from .models import mydatabase

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.

@api_view(['POST'])
def createData(request):
    serializer = mydatabaseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

class mydatabaseViewSet(viewsets.ModelViewSet):
    queryset = mydatabase.objects.all().order_by('created_at').reverse()
    serializer_class = mydatabaseSerializer



