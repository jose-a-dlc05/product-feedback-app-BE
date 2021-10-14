// Update with your config settings.
import '../../lib/env';

const knexfile = {
	development: {
		client: 'postgresql',
		connection: {
			host: process.env.TEST_DB_HOST,
			database: process.env.TEST_DB_NAME,
			user: process.env.TEST_DB_USER,
			password: process.env.TEST_DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: __dirname + '/migrations',
		},
		seed: {
			directory: __dirname + '/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
		// connection: {
		// 	host: process.env.DB_HOST,
		// 	database: process.env.DB_NAME,
		// 	user: process.env.DB_USER,
		// 	password: process.env.DB_PASS,
		// },
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: __dirname + '/migrations',
		},
		seed: {
			directory: __dirname + '/seeds',
		},
	},
};

export default knexfile;
