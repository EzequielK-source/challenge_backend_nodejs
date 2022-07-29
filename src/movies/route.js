const Router = require('express').Router;
const MoviesRouter = Router();
const FindAllMovies = require('./controller/find_all_movies')
MoviesRouter.route('/')
    .get(async(req,res)=>{
        const movies = await FindAllMovies();
        return res.status(200).json({
            'movies':movies
        })
    })
module.exports = MoviesRouter;