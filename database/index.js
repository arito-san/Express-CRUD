const Sequelize = require("sequelize");

//".env"
const sequelize = new Sequelize('crud', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//conexão com banco de dados.
try {
    sequelize.authenticate()
    console.log('conectado!');
} catch (err) {
    log('não foi possivel conectar', { err })
}

module.exports = sequelize
