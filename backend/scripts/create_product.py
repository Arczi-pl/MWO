import requests

with open('_token') as file:
    token = file.readline()
    headers={'Authorization': f'Bearer {token}'}
    res = requests.post('http://localhost:5000/create_product', json={'id': 1, 'name': 'Jabłko', 'category': 'Owoce', 'price': 12, 'properties': None}, headers=headers)
    print(res.text)