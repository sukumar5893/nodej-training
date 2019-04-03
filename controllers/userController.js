const router = require('express').Router();
const userService = require('../services/userService');
router.get('/', async (req, res) => {            //
    const usersList = await userService.getUsers()
    // res.json({ message: 'Welcome  to users' })
    res.json({ users: usersList });
})
// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(`User id is:${id}`);
//     res.json({ message: 'User id is successful' });
// })

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUsersById(parseInt(id));
    res.json({ user: user });
})


// router.post('/', (req, res) => {
//     console.log(JSON.stringify(req.body, undefined, 4));
//     res.json({ message: "Users Post Method Successful" });
// })

router.post('/', async (req, res) => {
    try {
        //const { userName } = req.params;
        await userService.insert(req.body);
        res.json({ message: 'In user Post' });
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})

module.exports = router;