"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    // Inserts seed entries
    await knex('users').insert([
        {
            user_id: 1,
            first_name: 'Suzanne',
            last_name: 'Chang',
            username: 'upbeat1811',
            password: 'Chang3456',
            img_url: './assets/user-images/image-suzanne.jpg',
        },
        {
            user_id: 2,
            first_name: 'Thomas',
            last_name: 'Hood',
            username: 'brawnybrave',
            password: 'Hood9876',
            img_url: './assets/user-images/image-thomas.jpg',
        },
        {
            user_id: 3,
            first_name: 'Victoria',
            last_name: 'Mejia',
            username: 'arlen_the_marlin',
            password: 'Mejia1234',
            img_url: './assets/user-images/image-victoria.jpg',
        },
        {
            user_id: 4,
            first_name: 'Jackson',
            last_name: 'Barker',
            username: 'countryspirit',
            password: 'Barker3556',
            img_url: './assets/user-images/image-jackson.jpg',
        },
        {
            user_id: 5,
            first_name: 'George',
            last_name: 'Partridge',
            username: 'soccerviewer8',
            password: 'Partridge7855',
            img_url: './assets/user-images/image-george.jpg',
        },
        {
            user_id: 6,
            first_name: 'Ryan',
            last_name: 'Welles',
            username: 'voyager.344',
            password: 'Welles2349',
            img_url: './assets/user-images/image-ryan.jpg',
        },
        {
            user_id: 7,
            first_name: 'Zena',
            last_name: 'Kelley',
            username: 'velvetround',
            password: 'Kelley2149',
            img_url: './assets/user-images/image-zena.jpg',
        },
        {
            user_id: 8,
            first_name: 'Elijah',
            last_name: 'Moss',
            username: 'hexagon.bestagon',
            password: 'Moss21239',
            img_url: './assets/user-images/image-elijah.jpg',
        },
        {
            user_id: 9,
            first_name: 'James',
            last_name: 'Skinner',
            username: 'hummingbird1',
            password: 'Skinner7402',
            img_url: './assets/user-images/image-james.jpg',
        },
        {
            user_id: 10,
            first_name: 'Anna',
            last_name: 'Valentine',
            username: 'annev1990',
            password: 'Valentine1802',
            img_url: './assets/user-images/image-anne.jpg',
        },
        {
            user_id: 11,
            first_name: 'Javier',
            last_name: 'Pollard',
            username: 'warlikeduke',
            password: 'Pollard6637',
            img_url: './assets/user-images/image-javier.jpg',
        },
        {
            user_id: 12,
            first_name: 'Roxanne',
            last_name: 'Travis',
            username: 'peppersprime32',
            password: 'Travis1027',
            img_url: './assets/user-images/image-roxanne.jpg',
        },
    ]);
}
exports.seed = seed;
