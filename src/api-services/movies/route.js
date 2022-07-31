const Router = require('express').Router;
const MoviesRouter = Router();
const FindAllMovies = require('./controller/find_all_movies')
const CreateMovie = require('./controller/create_movie')
const MovieDetail = require('./controller/movie_detail')
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
    });

MoviesRouter.route('/:id')
    .get(async(req,res)=>{
        try {
            const movie = await MovieDetail(req.params.id);
            return res.status(200).json({
                "movie":movie
            })
        }catch(err){
            console.error(err)
            return res.status(400).json(err)
        }
    })
module.exports = MoviesRouter;