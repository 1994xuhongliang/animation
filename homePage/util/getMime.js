let fs = require('fs');
let events = require('events');
let path = require('path');
let emitter = new events .EventEmitter();

function getMime(pathname, callback) {
	let suffix = path.extname(pathname);
	var mime;
	fs.readFile('./mime.json', (err, data) => {
		if(err) {
			console.log(err);
			return false;
		}
		let mimeObj = JSON.parse(data.toString());
		let mime = mimeObj[suffix];
		callback(mime)
	})
}

module.exports = getMime;
