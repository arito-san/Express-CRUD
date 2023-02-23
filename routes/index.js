const express = require("express");
const { createUser, searchAllUser, searchUser, editUser, deletetUser } = require("../controllers/index.js");
const router = express.Router();

//rotas
router.post('/createAccount', createUser);
router.get('/searchAllUser', searchAllUser);
router.post('/searchUser', searchUser);
router.put('/editUser', editUser);
router.post('/deleteUser', deletetUser);


module.exports = router