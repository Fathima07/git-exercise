import requests

def getQuotesOfDay():
    result = requests.get('https://quotes.rest/qod?language=en')
    res =   result.json
    print(result.json)


getQuotesOfDay()