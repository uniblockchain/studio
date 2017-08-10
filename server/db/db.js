var m = require('mongoose');

// var connectStr = process.env.DB_HOST;

var connectStr = 'mongodb://localhost/studio-1';

console.log("testing")

m.connect(connectStr);

m.connection.on('connected', function() {
	console.log('connected to ' + connectStr);
})

m.connection.on('error', function() {
	console.log('mongodb error');
})

m.connection.on('disconnected', function() {
	console.log('mongo disconnected from ' + connectStr);
})
