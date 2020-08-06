from rest_framework import serializers
from django.conf import settings

from .models import Tweet

MAX_LENGTH_TWEET = settings.MAX_LENGTH


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ["content"]

    def validate_content(self, value):
        if len(value) > MAX_LENGTH_TWEET:
            raise serializers.ValidationError("this tweet is too long")
        return value
