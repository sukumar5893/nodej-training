const router = require('express').Router();
const manufacturerService = require('../services/manufacturerService');


router.get('/', async (req, res) => {            //
    const manufacturersList = await manufacturerService.getManufacturer()
    res.json({ manufacturers: manufacturersList });
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const manufacturer = await manufacturerService.getManufacturerById(parseInt(id));
    res.json({ manufacturer: manufacturer });
})


router.post('/', async (req, res) => {
    try {
        await manufacturerService.insert(req.body);
        res.json({ message: 'In Manufacturer Post' });
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})

module.exports = router;