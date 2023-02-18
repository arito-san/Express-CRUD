const Sequelize = require("sequelize");

const sequelize = new Sequelize('crud', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('conectado!');
} catch (err) {
    log('não foi possivel conectar', { err })
}

module.exports = sequelize
