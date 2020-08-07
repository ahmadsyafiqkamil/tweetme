from django.db import models
import random
from django.conf import settings

# Create your models here.
User = settings.AUTH_USER_MODEL


class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='image/', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name="tweet_user", blank=True, through=TweetLike)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-id"]

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0, 100)
        }

    def __str__(self):
        return self.content
