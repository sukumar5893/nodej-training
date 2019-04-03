const client = require('../db')

exports.getProducts = async () => {
    const result = await client.query('select * from products');
    return result.rows;
}

exports.getProductById = async (id) => {
    const result = await client.query(`select * from products where  id =${id}`);
    return result.rows[0];
}

exports.insert = async (userName, manufacturerId, product) => {
    try {
        const query = 'INSERT INTO products(name, code, manufacturer_id, price, description, qty, created_at, created_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8)'
        const values = [product.name, product.code, manufacturerId, product.price, product.description, product.qty, new Date(), userName];
        await client.query(query, values);
    }
    catch{
        console.log(err);
        throw 'Unable  to  insert product';
    }
}

// exports.getProducts = () => {
//     return [
//         {
//             "phoneName": "iPhone Xs max",
//             "company": "Apple",
//             "manufacturer": "Foxconn",
//             "owner": "Sukumar",
//             "price": "$2000"
//         },

//         {
//             "phoneName": "Mi A1",
//             "company": "Redmi",
//             "manufacturer": "Xiaomi",
//             "owner": "Venkat",
//             "price": "$450"
//         }
//     ]
// }