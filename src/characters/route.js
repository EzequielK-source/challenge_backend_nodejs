const Router = require('express').Router;
const CharactersRouter = Router();

const FindAllCharacters = require('./controler/find_all_characters')
CharactersRouter.route('/')
    .get(async (req, res) => {
        const characters = await FindAllCharacters(req.query);
    
        return res.json({ characters: characters}).status(200)
    })

module.exports = CharactersRouter;