const Character = require('src/api-services/characters/model');
const { Op } = require("sequelize");
module.exports = async (name)=>{
    /**
     * Find all the characters whose name starts with the last parameter
     * 
     * @param name STRING
     * @return Characters ARRAY 
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