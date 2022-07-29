const {DataTypes} = require('sequelize')
const sequelize = require('src/database/index');

Characters = sequelize.define('characters', {
    ID:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    image:{
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    age:{
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.FLOAT
    },
    history: {
        type: DataTypes.TEXT
    }   
},{
    timestamps: false,
    tableName: "characters"
});
module.exports = Characters;
