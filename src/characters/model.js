const {DataTypes} = require('sequelize')
const sequelize = require('src/database/index');

const Movies = require('src/movies/model')
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
module.exports = Characters


Movies.belongsToMany(Characters, { through: 'Characters_Movies'})
Characters.belongsToMany(Movies, { through: 'Characters_Movies'})