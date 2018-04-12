from django.shortcuts import render_to_response, render
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
import json

def initApp(request):
    return render(request,'index.html')

@csrf_exempt
def createUser(request):
    
    return HttpResponse(json.dumps({'code': 200, 'data': {'notes': 'react-typescript', 'description': 'lorem ipsum'}}))
