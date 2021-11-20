import requests

with open('_token') as file:
    token = file.readline()
    headers={'Authorization': f'Bearer {token}'}
    res = requests.post('http://localhost:5000/delete_product', json={'id': 1}, headers=headers)
    print(res.text)