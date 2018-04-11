


@csrf_exempt
def initApp(request):
    return render(request,'reactEd/index.html', using='Django')
