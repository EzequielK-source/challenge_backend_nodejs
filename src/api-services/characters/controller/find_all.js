const Character = require('src/api-services/characters/model');
const MovieModel = require('src/api-services/movies/model');

const { Op } = require("sequelize");
const FindAll = {}
FindAll.FindAllCharacterFromMovie = async movieID =>{
    /**
     * Find all characters related to the id of movie
     * 
     * @param movieID UUID
     * 
     * @return characters [JSON]
     */
    const movie = await MovieModel.findByPk(movieID)
        .then((movie)=>{
            if(!movie) throw Error('movie not founded')
            return movie;
        })
    const characters = await movie.getActors();
    return { 
        movie_title: movie.title,
        characters
    };
}
FindAll.FindAllCharacters = async ()=>{
    /**
     * Finds all persisted characters
     * 
     * @return Characters array
     */
    const characters = await Character.findAll({
        attributes: ["image", "name"]
    });
    return characters;
}

FindAll.FindAllCharactersForAge = async age=>{
    /**
     * Finds all persisted characters filtered for age
     * 
     * 
     * @return Characters array
     */
    
    const characters = await Character.findAll({
        attributes: ["image", "name"],
        where:{
            age
        }
    })
    return characters;
}
FindAll.FindAllCharactersForName = async (name)=>{
    /**
     * Find all the characters whose name starts with the last parameter
     * 
     * @module.
     */
    if(name === ""  || typeof(name) !== 'string') throw new Error("Invalid name")

    const characters = await Character.findAll({
        attributes: ["image", "name"],
        where:{
            name: {
                [Op.like]:`%${name}%`
            }
        }
    })
    return characters;
}

module.exports = FindAll;