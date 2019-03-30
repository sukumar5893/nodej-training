const router = require('express').Router();
const userService = require('../services/userService');
router.get('/', (req, res) => {            //
    const usersList = userService.getUsers()
    // res.json({ message: 'Welcome  to users' })
    res.json({ users: usersList });
})
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`User id is:${id}`);
    res.json({ message: 'User id is successful' });
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "Users Post Method Successful" });
})

module.exports = router;