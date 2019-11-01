import requests
import http.server
from flask import Flask, render_template, request
import os

from bs4 import BeautifulSoup
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

headers = {
    'X-NCP-APIGW-API-KEY-ID': 'x4wqt3cduv',
    'X-NCP-APIGW-API-KEY': 'kbWnSqtjljgrsckrPVqUrsjhyPerwfR9HA1RefkL',
}

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')


@app.route('/map')
def info():
    return render_template('map.html')


@app.route('/todo/find')
def route():
    start = request.args.get('start')
    goal = request.args.get('goal')

    params = (('start', start),('goal', goal),('option', 'trafast'))

    response = requests.get('https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving', params=params, headers= headers)
    return response.json()

if(__name__ == '__main__'):
    app.debug = True
    app.run()


