#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lifeCategories"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "lifeCategory": {
      "name": "'"${NAME}"'",
      "hours": "'"${HOURS}"'",
      "cost": "'"${COST}"'"
    }
  }'

echo
