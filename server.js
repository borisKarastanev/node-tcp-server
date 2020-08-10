const net = require('net');

const server = net.createServer(connection => {
	console.log(`New Client ${connection.remoteAddress}`);

	connection.on('data', data => connection.write(`Hello, ${data}`));
	connection.on('end', () => console.log('Client Left'));
});

server.listen(9001);