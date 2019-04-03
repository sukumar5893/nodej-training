const client = require('../db')

exports.getUsers = async () => {
    const result = await client.query('select* from users');
    return result.rows;
}

exports.getUsersById = async (id) => {
    const result = await client.query(`select * from users where  id =${id}`);
    return result.rows[0];
}

exports.insert = async (user) => {
    try {
        const query = 'INSERT INTO users(user_name, email, mobile, designation, first_name, last_name, status, is_deleted) VALUES($1, $2, $3, $4, $5, $6, $7, $8)'
        const values = [user.user_name, user.email, user.mobile, user.designation, user.first_name, user.last_name, user.status, user.is_deleted];
        await client.query(query, values);
    }
    catch{
        console.log(err);
        throw 'Unable  to  insert User';
    }
}


// exports.getUsers = () => {
//     return [
//         {
//             firstName: 'Sukumar',
//             lastName: 'Kuchana',
//             email: 'k.sukumar@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Active'
//         },
//         {
//             firstName: 'Venkat',
//             lastName: 'Puttamsetti',
//             email: 'venky@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Subha',
//             lastName: 'Vellapandi',
//             email: 'vsubha@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Active'
//         },
//         {
//             firstName: 'Pradeep',
//             lastName: 'Kumar',
//             email: 'pk@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Shruthi',
//             lastName: 'Muthu',
//             email: 'shruthi@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Active'
//         },
//         {
//             firstName: 'Priyanka',
//             lastName: 'Chitti Babu',
//             email: 'priyankac@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Maneesha',
//             lastName: 'Akula',
//             email: 'amaneeha@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Active'
//         },
//         {
//             firstName: 'Mohana Priya',
//             lastName: 'Manohar',
//             email: 'priya@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Cinni',
//             lastName: 'Thomas',
//             email: 'chechi@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Active'
//         },
//         {
//             firstName: 'Jyothi',
//             lastName: 'Saikam',
//             email: 'jyothis@gmail.com',
//             phone: '9177466048',
//             designation: 'Trainee',
//             status: 'Inactive'
//         },
//         {
//             firstName: 'Maria',
//             lastName: 'Gallyot',
//             email: 'maria@gmail.com',
//             phone: '9177466048',
//             designation: 'Soft-Skills',
//             status: 'Active'
//         },
//         {
//             firstName: 'Ravi',
//             lastName: 'Shanker',
//             email: 'ravishanker@gmail.com',
//             phone: '9177466048',
//             designation: 'Tech-Lead',
//             status: 'Active'
//         }
//     ]

// }