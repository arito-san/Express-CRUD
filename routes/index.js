const express = require("express");
const { userController } = require("../controllers/index.js");
const router = express.Router();

router.post('/createAccount', userController);

router.get('/post', (req, res) => {
    res.send('podes')
});

module.exports = router