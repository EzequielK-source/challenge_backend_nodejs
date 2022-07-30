const express = require('express');
const morgan = require('morgan');
const sequelize = require('./database/index');
sequelize.sync()
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req,res)=>{
    return res.sendStatus(200)
})
//route imports
const CharactersRouter = require('src/api-services/characters/route')
const MoviesRouter = require('src/api-services/movies/route')
app.use('/characters', CharactersRouter)
app.use('/movies', MoviesRouter)

module.exports = app;