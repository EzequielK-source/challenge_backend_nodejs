const express = require('express');
const sequelize = require('./database/index');
sequelize.sync()
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req,res)=>{
    return res.sendStatus(200)
})
//route imports
const CharactersRouter = require('src/characters/route')
const MoviesRouter = require('src/movies/route')
app.use('/characters', CharactersRouter)
app.use('/movies', MoviesRouter)

module.exports = app;