const {v4: uuidv4} = require('uuid')
const Characters = require('src/api-services/characters/model');
module.exports = async ({ID,image, name, age, weight, history})=>{
    /**
     * Get CharactersFields for param and try persist a character
     * 
     * In case uuid are empty generate an uuid v4
     * 
     * In case any of the CharactersFields are empty throw error
     * @param image     STRING
     * @param image     STRING
     * @param name      STRING
     * @param history   STRING
     * @param age       NUMBER
     * @param weight    NUMBER
     * 
     * @return Character OBJECT
     */


    if(ID === undefined || ID === "") ID = uuidv4();

    const characterCreated = Characters.build({ID, image, name, age, weight, history});

    await characterCreated.save();
    return characterCreated.dataValues;
}