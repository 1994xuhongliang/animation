let http = require('http');
let url = require('url');
let fs = require('fs');
let getMime = require('./util/getMime.js');

http.createServer((req, res) => {
	let pathname = url.parse(req.url).pathname;
	let filepath = __dirname + pathname;
	let a;

	if(pathname !== 'favicon.ico') {

	    getMime(pathname, function(mime) {
	    	fs.readFile(filepath, (err, data) => {
				if(err) {
					res.writeHeader(404, {'content-type': + mime +';charset="utf-8"'});
					res.write('<h1>404 Not Found</h1>');
					res.end();
					return false;
				}

				res.writeHeader(200, {'content-type': mime + ';charset="utf-8"'});
				res.write(data);
				res.end();

			})
		});



		

	}else {
		res.end();
	}
}).listen('8888');

console.log('the server is running at http://localhost:8888');