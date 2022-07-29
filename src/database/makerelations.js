const sequelize = require('./index')
const CharacterModel = require('src/characters/model')
const MovieModel = require('src/movies/model')
module.exports =  ()=>{
    CharacterModel.belongsToMany(MovieModel, {through:'Characters_Movies'})
    MovieModel.belongsToMany(CharacterModel, {through:'Characters_Movies'})
}