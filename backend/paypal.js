let paypal ={
    "id": "8JW98496WX6272542",
    "status": "CREATED",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/8JW98496WX6272542",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://www.sandbox.paypal.com/checkoutnow?token=8JW98496WX6272542",
            "rel": "approve",
            "method": "GET"
        },
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/8JW98496WX6272542",
            "rel": "update",
            "method": "PATCH"
        },
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/8JW98496WX6272542/capture",
            "rel": "capture",
            "method": "POST"
        }
    ]
}

`Identity Token: VdPCURYi9swej2BtIShRG8dNepUclkInQaFJxyRsRbo6jNHZ2M-Vp9ljGSS`

`https://www.paypal.com/myaccount/profile/seller-tools`
var axios = require('axios');
var data = JSON.stringify({
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "126.00"
      }
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


let body = {
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "126.00"
      }
    }
  ]
}