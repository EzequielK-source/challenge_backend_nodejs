const {DataTypes} = require('sequelize')
const sequelize = require('src/database/index');

module.exports = sequelize.define('movies', {
    ID:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    image:{
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
        unique: true
    },
    creation_date:{
        type: DataTypes.DATEONLY
    },
    qualification: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    tableName: "movies"
});