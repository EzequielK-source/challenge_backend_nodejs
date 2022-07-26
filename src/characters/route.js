const Router = require('express').Router;
const CharactersRouter = Router();

CharactersRouter.route('/')
    .get((req,res)=>{
        return res.json({characters:'empty'}).status(200)
    })
module.exports = CharactersRouter;