from django.db import models

# Create your models here.

class mydatabase(models.Model):
    id = models.AutoField(primary_key = True)
    username = models.CharField(max_length = 50)
    caption = models.CharField(max_length = 500)
    src = models.CharField(max_length = 100000)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.username