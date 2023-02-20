const User = require('../models/user.js');
//criar usuário
const createUser = async (req, res) => {
    const { name } = req.body;
    await User.create({
        name: name
    })
    res.status(200).json({ msg: 'Pessoa cadastrada' });
}
//encontrar todos os usuários
const searchAllUser = async (req, res) => {
    const { name } = req.body;
    const users = await User.findAll({ raw: true })
    res.status(200).json({ msg: users });
}
//encontrar usuário especifico
const searchUser = async (req, res) => {
    const { name } = req.body;
    const users = await User.findAll({
        where: {
            name: name
        }
    })
    res.status(200).send({ msg: users });
}
module.exports = {
    createUser,
    searchAllUser,
    searchUser
}