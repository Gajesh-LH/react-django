from django.shortcuts import render_to_response, render



def initApp(request):
    return render(request,'index.html')
