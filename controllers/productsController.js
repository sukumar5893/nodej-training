const router = require('express').Router();
const productService = require('../services/productService');

router.get('/', async (req, res) => {            //
    const productsList = await productService.getProducts()
    // res.json({ message: 'Welcome  to products' })

    res.json({ products: productsList });
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(`Product id is:${id}`);
//     res.json({ message: 'Product id is successful' });
// })


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(parseInt(id));
    res.json({ product: product });
})


// router.post('/', (req, res) => {
//     console.log(JSON.stringify(req.body, undefined, 4));
//     res.json({ message: "Products Post Method Successful" });
// })

router.post('/:userName/:manufacturerId', async (req, res) => {
    // console.log(JSON.stringify(req.body, undefined, 4));
    // res.json({ message: "Products Post Method Successful" });
    try {
        const { userName, manufacturerId } = req.params;
        await productService.insert(userName, parseInt(manufacturerId), req.body);
        res.json({ message: 'In product Post' });
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})


module.exports = router;