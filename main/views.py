from django.shortcuts import render
from .services import create_pwd
from django.http import JsonResponse


def main_page(request):
    template = 'index.html'
    return render(request, template)


def retrieve_pwd(request):
    pwd_length = request.GET.get('pwd_length')
    specs = request.GET.get('specs')
    pwd = ''
    if pwd_length:
        pwd = create_pwd(
            pwd_length=int(pwd_length),
            specs=specs,
        )
    response = {'pwd': pwd}
    return JsonResponse(response)
