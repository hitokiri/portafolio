from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import RequestContext
import urllib2
import json

# Create your views here.

def view_index(request):
	vista = 'index'
	response_trabajo = urllib2.urlopen('https://api.github.com/users/hitokiri/repos')
	data_trabajo = json.load(response_trabajo)
	response_blog = urllib2.urlopen('https://www.googleapis.com/blogger/v3/blogs/7610380627270839038/posts?userIp=190.99.25.97&key=AIzaSyCZsHhv72zpjDni3ZT1Sw6uGIGEQCmgqCw')
	data_blog = json.load(response_blog)
	ctx = {'vista': vista, 'trabajo': data_trabajo, 'blog':data_blog}
	return render_to_response('index.html', ctx, context_instance=RequestContext(request))