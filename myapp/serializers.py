from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'email',  'password']
        extra_kwargs = {'password': {'write_only': True}}
        def create(self, validated_data):
            user = Users.create_user(**validated_data)
            return user

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
