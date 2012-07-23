var mongodb = JSON.parse(process.env.VCAP_SERVICES)['mongodb-1.8'][0].credentials;

module.exports = {

	mongodb: {
		server: mongodb.hostname + ':' + mongodb.port,
		database: mongodb.db,
		user: mongodb.username,
		password: mongodb.password
	},

	monitor: {
		name: 'origin',
		apiUrl: 'http://localhost:' + process.env.PORT + '/api',
		pollingInterval: 10000, // ten seconds
		timeout: 5000 // five seconds
	},

	analyzer: {
		updateInterval: 60000, // one minute
		qosAggregationInterval: 600000, // ten minutes
		pingHistory: 8035200000 // three months
	},

	autoStartMonitor: true,

	server: {
		port: process.env.PORT
	},

	verbose: true // only used in dev

};