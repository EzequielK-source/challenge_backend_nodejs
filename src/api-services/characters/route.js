const Router = require('express').Router;
const CharactersRouter = Router();

const {FindAllCharacters, FindAllCharactersForAge, FindAllCharactersForName} = require('./controller/find_all');
const CreateCharacter = require('./controller/create_character')
CharactersRouter.route('/')
    .get(async (req, res) => {
        try{
            const { name, IDmovie, age } = req.query;
            let characters;
            if (name !== undefined) {
                characters = await FindAllCharactersForName(name)
            }
            if (age !== undefined) {
                characters = await FindAllCharactersForAge(age)
            }
            if (age === undefined && name === undefined) {
                characters = await FindAllCharacters();
            }
            return res.json({ characters: characters }).status(200)
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    })
    .post(async (req, res) => {
        try{
            const createdCharacter = await CreateCharacter(req.body);
            return res.status(201).json({ 
                'status': 'Character created',
                character: createdCharacter.dataValues
            })
        }catch(err){
            console.log(err)
            return res.status(400).json(err)
        }
    })

module.exports = CharactersRouter;