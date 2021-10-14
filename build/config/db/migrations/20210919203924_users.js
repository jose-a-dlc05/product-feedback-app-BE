"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('users', (table) => {
            table.string('id').primary().unique();
            table.string('first_name', 50).notNullable();
            table.string('last_name', 50).notNullable();
            table.string('username', 50);
            table.string('password', 255).notNullable();
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
    ON users FOR EACH ROW EXECUTE PROCEDURE 
    update_timestamp_column();
  `);
    });
};
exports.down = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('users');
    });
};
