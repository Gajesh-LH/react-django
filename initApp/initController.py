from django.shortcuts import render_to_response, render
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
import json

def initApp(request):
    return render(request,'index.html')

@csrf_exempt
def createUser(request):
    print request
    data = UserSerializer(request.POST)
    return HttpResponse(json.dumps({'username': data['username']}))
