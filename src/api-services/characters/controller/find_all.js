const Character = require('src/api-services/characters/model');
const { Op } = require("sequelize");
const FindAll = {}
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
    console.log(name)
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