const router = require('express').Router();
const authService = require('../services/authService');
router.post('/login', (req, res) => {

    try {
        const { username, password } = req.body;
        authService.login(username, password)
        console.log(req.body);
        res.json({ token: 'generated' });
    }
    catch (err) {
        res.status(401).json({ message: err });
    }
})

module.exports = router;