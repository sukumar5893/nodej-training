const router = require('express').Router();

router.get('/', (req, res) => {            //
    res.json({ message: 'Welcome  to logistics' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Logistic id is:${id}`);
    res.json({ message: 'Logistic id is  successful' });
})

router.get('/:id/products', (req, res) => {
    const id = req.params.id;
    console.log(`Logistic id is:${id}`);
    res.json({ message: 'Route is successful' });
})

module.exports = router;