const express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req,res)=>{
    return res.sendStatus(200)
})
//route imports
const CharactersRouter = require('src/characters/route')
app.use('/characters', CharactersRouter)

module.exports = app;