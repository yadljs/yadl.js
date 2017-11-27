const EventEmitter = require('events');
const Constants = require('./util/Constants.js');
const getGatewayUrl = require('./util/GetGatewayUrl');

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		if (!token) throw new Error('The client constructor must have a valid token.');
		this.token = token;
		this.ws = {};
		this.options = options === {} ? null : options;
	}

	login() {
		console.log('login() called');
		getGatewayUrl().then((url) => {
			this.ws.url = url;
		}).catch((error) => {
			throw error;
		});
	}

	get Constants() {
		return Constants;
	}
}

module.exports = Client;