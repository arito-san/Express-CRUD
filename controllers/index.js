const User = require('../models/user.js');
//criar usuário
const createUser = async (req, res) => {
    const { name } = req.body;
    await User.create({
        name: name
    })
    res.status(200).json({ msg: 'Usuário cadastrado' });
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
//editar usuário
const editUser = async (req, res) => {
    const { name, id } = req.body;
    await User.update({
        name: name,
    }, {
        where: {
            id: id,
        }
    })
    res.status(200).send({ msg: "Usuário atualizado!" });
}
//deletar usuário
const deletetUser = async (req, res) => {
    const { name, id } = req.body;
    await User.destroy({
        where: {
            id: id,
        }
    })
    res.status(200).send({ msg: "Usuário deletado!" });
}
module.exports = {
    createUser,
    searchAllUser,
    searchUser,
    editUser,
    deletetUser
}