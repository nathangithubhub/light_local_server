const request = require('request');

const URL_GET = 'https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders/new';

// 1. GET request
// request(URL_GET, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// });

// 2. PUT request (the same as post)
const URL_PUT = 'https://kgng8eutc9.execute-api.us-west-2.amazonaws.com/orders';
const body = {
  "customer_name": "jack3",
  "credit_card_info": "0000222233334444",
  "shipping_address": "120 dixon landing",
  "telephone_number": "740-234-1233",
  "product_number": "222"
};
request({
  url: URL_PUT,
  method: 'PUT',
  json: body
}, function(error, response, body){
  if (error) { return console.log(error); }
  console.log(body);
});
