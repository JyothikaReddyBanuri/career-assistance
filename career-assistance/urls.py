from django.urls import path
from jobs.views import JobListView

urlpatterns = [
    path('api/jobs/', JobListView.as_view(), name='job-list'),
]

