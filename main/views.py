from django.shortcuts import render
from .services import create_pwd
from django.http import JsonResponse


def main_page(request):
    template = 'index.html'
    return render(request, template)


def retrieve_pwd(request):
    pwd_length = request.GET.get("pwd_length")
    pwd = ''
    # if request.method == 'POST':
    #     pwd_length = request.POST.get('pwd_length')
    #     uppercase = request.POST.get('uppercase') or None
    #     lowercase = request.POST.get('lowercase') or None
    #
    if pwd_length:
        print(pwd_length)
        pwd = create_pwd(
            pwd_length=int(pwd_length),
            uppercase=False,
            lowercase=False,
        )
    response = {'pwd': pwd}
    return JsonResponse(response)