'use strict';
var paytmPayment = require('./paytmPayment');

function route(_, response) {
	var params = {};
	// params['MID'] = 'oWKsgD10566403533027'; //Provided by Paytm
	// params['ORDER_ID'] = '1520843747890'; //unique OrderId for every request
	// params['CUST_ID'] = 'test111'; // unique customer identifier
	// params['INDUSTRY_TYPE_ID'] = 'Retail'; //Provided by Paytm
	// params['CHANNEL_ID'] = 'WAP'; //Provided by Paytm
	// params['TXN_AMOUNT'] = '1'; // transaction amount
	// params['WEBSITE'] = 'TECHweb'; //Provided by Paytm
	// params['CALLBACK_URL'] = 'https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=1520843747890'; //Provided by Paytm

	params = {
		requestType: 'Payment',
		mid: 'oWKsgD10566403533027',
		websiteName: 'dineoutWEB',
		orderId: '1520843747890',
		txnAmount: {
			value: '100.00',
			currency: 'INR'
		},
		userInfo: {
			custId: 'CUST001'
		},
		callbackUrl: 'https://pg-stage.paytm.in/MerchantSite/bankResponse'
	};
	paytmPayment(params, 'cakcXM@3ToaqUxCL')
		.then(checksum => {
			response.writeHead(200, { 'Content-type': 'text/text', 'Cache-Control': 'no-cache' });
			response.write(checksum);
			response.end();
		})
		.catch(err => {
			response.writeHead(200, { 'Content-type': 'text/json', 'Cache-Control': 'no-cache' });
			response.write(JSON.stringify(err));
			response.end();
		});
}

exports.route = route;
