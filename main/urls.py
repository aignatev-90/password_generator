from django.urls import path, re_path
from .views import main_page, retrieve_pwd



app_name = 'main'

urlpatterns = [
    path('', main_page, name='main_page'),
    re_path('retrieve_pwd/', retrieve_pwd, name='retrieve_pwd')
]
