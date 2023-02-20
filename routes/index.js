const express = require("express");
const { createUser, searchAllUser, searchUser } = require("../controllers/index.js");
const router = express.Router();

//rotas
router.post('/createAccount', createUser);
router.get('/searchAllUser', searchAllUser);
router.post('/searchUser', searchUser);


module.exports = router