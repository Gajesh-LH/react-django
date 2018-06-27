from django.shortcuts import render_to_response, render
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
import json
from django.db import IntegrityError

def initApp(request):
    return render(request,'index.html')

@csrf_exempt
def createUser(request):
    username = request.POST.get('username')
    email = request.POST.get('email')
    password = request.POST.get('password')

    try:
        savedData = User.objects.create_user(username, email, password)
        return HttpResponse(json.dumps({'code': 200, 'message': 'user created successfully'}))
    except IntegrityError, e:
        print e
        response = HttpResponse(json.dumps({'code': 404, 'message': e.message, 'status': False}))
        response.status_code = 400
        return response

