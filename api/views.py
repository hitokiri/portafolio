from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import RequestContext

# Create your views here.

def view_index(request):
	vista = 'index'
	ctx = {'vista': vista}
	return render_to_response('index.html', ctx, context_instance=RequestContext(request))