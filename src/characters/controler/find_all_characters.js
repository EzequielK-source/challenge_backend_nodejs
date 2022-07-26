const Character = require('src/characters/model')

module.exports = async ({age, movie, name})=>{
    /**
     * Finds all persisted characters and filter it
     * for age, movie or name
     * 
     * @return Characters array
     */
    let characters = [];
    if(age === undefined && movie === undefined && name === undefined){
         characters = await Character.findAll();
    }

    if(age !== undefined) {
        characters = await Character.findAll({
            where: {
                age
            }
        });
    }
    return characters;
}