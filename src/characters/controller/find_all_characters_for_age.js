const Character = require('src/characters/model')
module.exports = async age=>{
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