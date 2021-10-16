import knex from 'knex';
import knexfile from './knexfile';

const db = knex(knexfile.production);
export default db;
