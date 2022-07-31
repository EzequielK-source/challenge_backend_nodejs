const Sequelize = require('sequelize');
const config = require('config')
const {dialect,user,password,host,port,database} = config.get('Customer.dbConfig')

module.exports = new Sequelize(`${dialect}://${user}:${password}@${host}:${port}/${database}`,{
    logging: false
});
