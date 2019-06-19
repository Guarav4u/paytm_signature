var checksum = require('./checksum');
const paytmPayment = (params, marchentKey) => {
	return new Promise((resolve, reject) => {
		checksum.genchecksum(params, marchentKey, function(err, checksum) {
			if (err) {
				console.log('error: ', err, '\n');
				reject(err);
			} else {
				console.log('Checksum: ', checksum, '\n');
				resolve(checksum);
			}
		});
	});
};

module.exports = paytmPayment;
