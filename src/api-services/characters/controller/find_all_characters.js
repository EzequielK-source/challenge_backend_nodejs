const Character = require('src/api-services/characters/model');

module.exports = async ()=>{
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