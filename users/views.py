from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json

# Create your views here.

@api_view(['POST'])
def login(request):
    data = json.loads(request.body)
    user = Users.objects.get(email=data['email'], password = data['password'])
    print(user)
    if user:
        return Response('success')
    else: 
        return Response("no User")

@api_view(['POST'])
def register(request):
    data = json.loads(request.body)
    user = Users(
        name=data['name'], 
        phonenumber=data['phone'], 
        websiteurl=data['website_url'],
        email=data['email'],
        password=data['password']
    )
    user.save()
    return Response('sucess')

# @api_view(['GET'])
# def account(request):
