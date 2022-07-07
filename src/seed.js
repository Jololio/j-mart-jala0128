const sequelize = require('./database')

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS items;

        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            password VARCHAR(100)
        );

        CREATE TABLE items (
            item_id SERIAL PRIMARY KEY,
            item_name VARCHAR(150),
            item_price int,
            manufacturer VARCHAR(100),
            item_desc VARCHAR(300),
            img_url VARCHAR(10000)
        );

        INSERT INTO users (first_name, last_name, password)
        VALUES ('Joseph', 'Al-Abudi', 'password');

        INSERT INTO items (item_name, item_price, manufacturer, item_desc, img_url)
        VALUES ('12 Pack of Batteries', '9.99', 'Duracell', 'A 12 pack of 1.5 Volt Alkaline batteries that provide use for clocks, game controllers, remotes, etc. NON-RECHARGEABLE.', 'https://i5.walmartimages.com/asr/1f70db2b-f902-41c5-81cb-dee3c5128e11_1.624b89a00dbe045d838ae44b6e8746e0.jpeg');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}