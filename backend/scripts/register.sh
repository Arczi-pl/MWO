address=$(cat _address)
curl -X PUT $address/register -H 'Content-Type: application/json' -d "{\"mail\":\"$1\",\"password\":\"$2\"}"
printf "\n"
