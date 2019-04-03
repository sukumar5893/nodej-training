const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'Products',
    password: 'Login@1234',
    port: 5433,
})
client.connect();

// client.query('select * from products', (err, res) => {
//     console.log(res);
// })
module.exports = client;