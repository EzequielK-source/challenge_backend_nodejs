const {DataTypes} = require('sequelize')
const sequelize = require('src/database/index');
const Movie = require('src/api-services/movies/model')
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


Characters.belongsToMany(Movie, {as:"movie", through:'characters_movies'})
Movie.belongsToMany(Characters, {as:"actors", through:'characters_movies'})
module.exports = Characters;
