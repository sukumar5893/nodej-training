const router = require('express').Router();
const productService = require('../services/productService');

router.get('/', (req, res) => {            //
    const productsList = productService.getProducts()
    // res.json({ message: 'Welcome  to products' })

    res.json({ products: productsList });
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Product id is:${id}`);
    res.json({ message: 'Product id is successful' });
})
router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Products Post Method Successful" });
})


module.exports = router;