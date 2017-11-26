const EventEmitter = require('events');
const Constants = require('./util/Constants.js');
// const snek = require('snekfetch');

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		if (!token) throw new Error('The client constructor must have a valid token.');
		this.token = token;
		this.options = options === {} ? null : options;
	}

	login() {
		console.log('login() attempted');
	}

	get Constants() {
		return Constants;
	}
}

exports = Client;