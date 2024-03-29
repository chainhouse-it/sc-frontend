const { createServer } = require('https');
const http = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const privateKey = fs.readFileSync('/root/privkey.txt', 'utf8');
const certificate = fs.readFileSync('/root/cert.txt', 'utf8');
const ca = fs.readFileSync('/root/chain.txt', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca,
};

app.prepare().then(() => {
	createServer(credentials, (req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(443, (err) => {
		if (err) throw err;
		console.log('Started server');
	});
});

http.createServer((req, res) => {
	res.writeHead(301, {
		Location: 'https://' + req.headers['host'] + req.url,
	});
	res.end();
}).listen(80);
