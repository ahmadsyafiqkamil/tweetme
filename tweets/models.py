from django.db import models
import random

# Create your models here.

class Tweet(models.Model):
    content = models.TextField(blank=True,null=True)
    image = models.FileField(upload_to='image/',blank=True,null=True)

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0,100)
        }

