from django.db import models


class Pokemon(models.Model):

    class Colours(models.TextChoices):
        GOLD = "GO"
        SILVER = "SI"
        BLUE = "BL"
        RED = "RE"

    class GrowthRate(models.TextChoices):
        FAST = "FA"
        MEDIUM = "ME"
        SLOW = "SL"

    class Types(models.TextChoices):
        GRASS = 'Grass'
        POISON = 'Poison'
        FLYING = 'Flying'
        FIRE = "Fire",

    name = models.CharField(max_length=30)
    species = models.CharField(max_length=20)
    generation = models.IntegerField()
    colour = models.CharField(choices=Colours.choices, max_length=2)
    growth_rate = models.CharField(choices=GrowthRate.choices, max_length=2)
    hp = models.IntegerField()
    attack = models.IntegerField()
    # height = models.Int....etc...
    type = models.CharField(max_length=10, choices=Types.choices)
    image = models.TextField()





