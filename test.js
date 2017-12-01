const Discord = require('./lib/Client.js');

const client = new Discord('');

client.on('ready', () => {
	console.log('Client is ready.');
});

client.login();