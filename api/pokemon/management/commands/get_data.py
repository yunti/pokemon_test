from django.core.management.base import BaseCommand

from api.pokemon.models import Pokemon
import requests


class Command(BaseCommand):

    api_source = 'https://pokeapi.co/api/v2/'

    def handle(self, *args, **options):
        print("Clearing existing data")

        # Clear out any existing data
        Pokemon.objects.all().delete()

        # requesting data from api
        # try:
        #     requests.get(....)

        # Leave this for now.......


        # saving data to db
