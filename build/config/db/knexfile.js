"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require("../../lib/env");
const knexfile = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
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
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
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
};
exports.default = knexfile;
