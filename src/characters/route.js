const Router = require('express').Router;
const CharactersRouter = Router();

const FindAllCharacters = require('./controler/find_all_characters')
const FindAllCharactersForAge = require('./controler/find_all_characters_for_age')
const FindAllCharactersForName = require('./controler/find_all_characters_by_name')
CharactersRouter.route('/')
    .get(async (req, res) => {
        const {name, IDmovie, age} = req.query;
        let characters;
        if(name !== undefined){
            characters = await FindAllCharactersForName(name)
        }
        if(age !== undefined){
            characters = await FindAllCharactersForAge(age)
        }
        if(age === undefined && name == undefined){
            characters = await FindAllCharacters(req.query);
        }
        return res.json({ characters: characters}).status(200)
    })

module.exports = CharactersRouter;