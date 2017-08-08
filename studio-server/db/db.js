var m = require('m');

// var connectStr = process.env.DB_HOST;

var connectStr = 'mongodb://localhost/studio-0.5';

console.log("testing")

m.connect(connectStr);

m.connection.on('connected', function() {
	console.log('connected to ' + connectStr);
})

m.connection.on('error', function() {
	console.log('mongodb error ' + error);
})

m.connection.on('disconnected', function() {
	console.log('m disconnected from ' + connectStr);
})
