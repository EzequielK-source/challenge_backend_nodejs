const Router = require('express').Router;
const MoviesRouter = Router();

MoviesRouter.route('/')
    .get((req,res)=>{
        return res.status(200).json({
            'movies':[]
        })
    })
module.exports = MoviesRouter;