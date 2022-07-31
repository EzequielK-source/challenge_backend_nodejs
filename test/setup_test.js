const sequelize = require('src/database/index')

sequelize.sync({force:true})
console.clear();