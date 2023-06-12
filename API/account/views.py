from rest_framework.views import APIView
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework.response import Response


class RegisterApi(APIView):
    """ Register User """
    serializer_class = RegisterSerializer

    def post(self, request):
        ser_register_data = RegisterSerializer(data=request.POST)
        if ser_register_data.is_valid():
            ser_register_data.create(ser_register_data.validated_data)
            return Response(ser_register_data.data, status=status.HTTP_201_CREATED)
        return Response(ser_register_data.errors, status=status.HTTP_400_BAD_REQUEST)