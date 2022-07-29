const Router = require('express').Router;
const MoviesRouter = Router();
const FindAllMovies = require('./controller/find_all_movies')
const CreateMovie = require('./controller/create_movie')
MoviesRouter.route('/')
    .get(async(req,res)=>{
        const movies = await FindAllMovies();
        return res.status(200).json({
            'movies':movies
        })
    })
    .post(async(req,res)=>{
        const CreatedMovieId = await CreateMovie(req.body);
        return res.status(201).json({
            status:'movie created',
            MovieID: CreatedMovieId.ID
        })
    })
module.exports = MoviesRouter;