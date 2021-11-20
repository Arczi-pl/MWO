address=$(cat _address)
curl -X POST $address/login -H 'Content-Type: application/json' -d "{\"mail\":\"$1\",\"password\":\"$2\"}" -v 2>&1 -o _response.txt | grep "Authorization" | cut -d' ' -f 3 > _token
cat _response.txt
printf "\n"
    