import Sequelize from ('sequelize');

const sequelize = new Sequelize('crud', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});
export {
    sequelize
};