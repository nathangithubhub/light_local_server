```
curl -v -X PUT \
 'http://localhost:5000/orders' \
 -H 'content-type: application/json' \
 -d '{
"customer_name": "jack3",
"credit_card_info": "0000222233334444",
"shipping_address": "120 dixon landing",
"telephone_number": "740-234-1233",
"product_number": "222"
}' | json_pp
```

```
curl -v -X GET 'http://localhost:5000/orders/222_7133885910390347' | json_pp
```
