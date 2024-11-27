from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    experience_required = models.BooleanField(default=False)

    def __str__(self):
        return self.title

