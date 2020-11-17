from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from .models import Pokemon
from .serializers import PokemonSerializer


class RegularSetPagination(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 500


class PokemonViewSet(viewsets.ModelViewSet):

    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    pagination_class = RegularSetPagination
