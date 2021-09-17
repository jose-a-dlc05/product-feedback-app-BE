import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('comments', (table) => {
		table.string('comment_id').primary();
		table.string('content', 500);
		table
			.string('product_request_id')
			.references('product_feedback_id')
			.inTable('product_feedback')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		table
			.string('user_id')
			.references('user_id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		table.string('replying_to_user');
		table.integer('replying_to_id');
		table.integer('reply_id');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	}).raw(`
    CREATE OR REPLACE FUNCTION update_timestamp_column()
    RETURNS TRIGGER AS $$
    BEGIN
     NEW."updated_at"=now(); 
     RETURN NEW;
    END;
    $$ language 'plpgsql';
  `).raw(`
    CREATE TRIGGER update_timestamp_column BEFORE UPDATE
    ON comments FOR EACH ROW EXECUTE PROCEDURE 
    update_timestamp_column();
  `);
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('comments');
}
