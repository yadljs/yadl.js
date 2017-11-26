const Discord = require('./lib/Client.js');

const client = new Discord('Mzg0Mzk1NzI1NzQxNjIxMjQ5.DPyMCw.DpQiWy6jQwy3FKw-GkFltr_ZjUA');

client.on('ready', () => {
	console.log('Client is ready.');
});

client.login();