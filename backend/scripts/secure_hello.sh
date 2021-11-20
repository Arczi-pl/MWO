address=$(cat _address)
token=$(cat _token)
curl -H 'Accept: application/json' -H "Authorization: Bearer $token" $address/secure_hello
echo ""