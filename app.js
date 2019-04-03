require('./db');
const app = require('express')();   //
const bodyParser = require('body-parser');
const productController = require('./controllers/productsController');
const logisticsController = require('./controllers/logisticsController');
const userController = require('./controllers/userController');
const dashboardController = require('./controllers/dashboardController');
const authController = require('./controllers/authController');
const manufacturerController = require('./controllers/manufacturerController');
app.use(bodyParser.json());   // use is a plugin
app.get('/', (req, res) => {            //
    res.json({ message: 'Hello World' })
})

app.use('/products', productController);
app.use('/logistics', logisticsController);
app.use('/users', userController);
app.use('/dashboard', dashboardController);
app.use('/auth', authController);
app.use('/manufacturer', manufacturerController);
module.exports = app;