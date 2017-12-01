const snek = require('snekfetch');
const Constants = require('./Constants');

module.exports = () => {
	return new Promise((resolve, reject) => {
		snek.get(Constants.Endpoints.GATEWAY).then((result) => {
			resolve(result.body.url);
		}).catch((error) => {
			reject(error);
		});
	});
};