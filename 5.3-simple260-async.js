import tcp from 'net';
const port = 8888

async function runTheServer() {
	const tcpServer = tcp.createServer();

	tcpServer.on('connection', async (socket) => {
		socket.setEncoding('utf-8');
		console.log(`Connection from ${socket.remoteAddress} on port ${socket.remotePort}`);

		socket.on('data', async (data) => {
			console.log(`Data from ${socket.remoteAddress} on port ${socket.remotePort}: ${data}`);
			socket.write(`you sent: ${data}`);
			console.log(`Closing connection from ${socket.remoteAddress} on port ${socket.remotePort}`)
			socket.end();
		});

		socket.on('end', () => {
			console.log(`Closed from ${socket.remoteAddress} on port ${socket.remotePort}`)
		});

		socket.on('error', (err) => {
			console.error(`Error on socket: ${err.message}`);
		});
	});

	await new Promise((resolve, reject) => {
		tcpServer.listen(port, (err) => {
			if (err) {
				 reject(err);
			} else {
				console.log(`Server listening on port ${port}`);
				resolve();
			}
		});
	});
}
runTheServer().catch(console.error);