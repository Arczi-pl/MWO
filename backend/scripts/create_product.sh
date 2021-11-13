address=$(cat _address)
token=$(cat _token)
curl -X PUT $address/create_product -H 'Content-Type: application/json' -H "Authorization: Bearer $token" -d "{\"mail\":\"$1\",\"password\":\"$2\"}"
printf "\n"
    