import { Knex } from 'knex';

exports.up = async function (knex: Knex): Promise<void> {
	return knex.schema.createTable('users', (table) => {
		table.increments('user_id').primary();
		table.string('first_name', 50).notNullable();
		table.string('last_name', 50).notNullable();
		table.string('username', 50);
		table.string('password', 20).notNullable();
		table.string('img_url', 255);
		table.timestamps(true, true);
	});
};

exports.down = async function (knex: Knex): Promise<void> {
	return knex.schema.dropTable('users');
};
