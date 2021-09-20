"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    // Inserts seed entries
    await knex('users').insert([
        {
            id: 'b1d4176e-b3da-41eb-94e8-69cc627c4afa',
            first_name: 'Suzanne',
            last_name: 'Chang',
            username: 'upbeat1811',
            password: 'Chang3456',
        },
        {
            id: 'ce932f9b-c7f2-4c6b-8975-fa81ac50f4ff',
            first_name: 'Thomas',
            last_name: 'Hood',
            username: 'brawnybrave',
            password: 'Hood9876',
        },
        {
            id: 'e276e79a-4571-4f79-a498-103793ac4e20',
            first_name: 'Victoria',
            last_name: 'Mejia',
            username: 'arlen_the_marlin',
            password: 'Mejia1234',
        },
        {
            id: '007c8c8d-323f-4e81-b27d-a97084306f32',
            first_name: 'Jackson',
            last_name: 'Barker',
            username: 'countryspirit',
            password: 'Barker3556',
        },
        {
            id: '9d0a4fa6-10e9-422b-8c77-3296089a1982',
            first_name: 'George',
            last_name: 'Partridge',
            username: 'soccerviewer8',
            password: 'Partridge7855',
        },
        {
            id: 'fc5e827e-bf86-4b7e-b853-d9527d2516df',
            first_name: 'Ryan',
            last_name: 'Welles',
            username: 'voyager.344',
            password: 'Welles2349',
        },
        {
            id: 'cbf497ed-4601-4241-b46a-d13b2b278375',
            first_name: 'Zena',
            last_name: 'Kelley',
            username: 'velvetround',
            password: 'Kelley2149',
        },
        {
            id: 'a0016427-1868-4f83-95b4-0f2f47dcfc14',
            first_name: 'Elijah',
            last_name: 'Moss',
            username: 'hexagon.bestagon',
            password: 'Moss21239',
        },
        {
            id: '2bb3a4c4-b490-46c8-8315-46d159c6f4f5',
            first_name: 'James',
            last_name: 'Skinner',
            username: 'hummingbird1',
            password: 'Skinner7402',
        },
        {
            id: '2ea91f77-c662-4dde-a4b3-7a020d3f760f',
            first_name: 'Anna',
            last_name: 'Valentine',
            username: 'annev1990',
            password: 'Valentine1802',
        },
        {
            id: '9d60b626-26e5-447d-b633-df38830df137',
            first_name: 'Javier',
            last_name: 'Pollard',
            username: 'warlikeduke',
            password: 'Pollard6637',
        },
        {
            id: 'fb0c155a-a041-4821-a67e-8678b6aa4a93',
            first_name: 'Roxanne',
            last_name: 'Travis',
            username: 'peppersprime32',
            password: 'Travis1027',
        },
    ]);
}
exports.seed = seed;
