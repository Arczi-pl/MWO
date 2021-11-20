import requests

res = requests.get('http://localhost:5000/get_products')
print(res.text)