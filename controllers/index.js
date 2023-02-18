const User = require('../models/user.js');
const userController = async (req, res) => {
    const { name } = req.body;
    await User.create({
        name: name
    })
    res.status(200).json({ msg: 'Pessoa cadastrada' });
}

module.exports = { userController }