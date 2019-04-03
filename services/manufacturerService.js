const client = require('../db')

exports.getManufacturer = async () => {
    const result = await client.query('select * from manufacturer');
    return result.rows;
}

exports.getManufacturerById = async (id) => {
    const result = await client.query(`select * from manufacturer where  id =${id}`);
    return result.rows[0];

}

exports.insert = async (manu) => {
    try {
        const query = 'INSERT INTO manufacturer(name, company, city, state, country, pincode) VALUES($1, $2, $3, $4, $5, $6)'
        const values = [manu.name, manu.company, manu.city, manu.state, manu.country, manu.pincode];
        await client.query(query, values);
    }
    catch{
        console.log(err);
        throw 'Unable  to  insert product';
    }
}