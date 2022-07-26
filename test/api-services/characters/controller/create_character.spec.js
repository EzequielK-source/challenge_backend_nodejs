const chai = require('chai')
    , asPromised = require('chai-as-promised')
chai.use(asPromised);


const { expect } = chai;
//Character domain import
const {v4: uuidv4} = require('uuid')
const DeleteAllCharacters = require('test/utils/delete_all_characters')
const CreateCharacter = require('src/api-services/characters/controller/create_character');
describe('CreateCharacter test', () => {
    before(async()=>{
        await DeleteAllCharacters();
    })
    const validCharacterFields = {
        ID: uuidv4(),
        name: 'a valid name',
        age: 10,
        image:"path/to/image",
        weight: 90,
        history: "bla bla bla bla"
    }
    it('Valid CreateCharacter', async () => {
        return expect(CreateCharacter(validCharacterFields))
            .to
            .eventually
            .be
            .fulfilled
            .to
            .have
            .property('dataValues')
            .deep
            .equal(validCharacterFields)
    });
    
});