const MoviesModel = require('src/movies/model')
module.exports = async()=>{
    /**
     * Find all persisted movies and return it
     */
    const movies = await MoviesModel.findAll({
        attributes:["image", "title", "creation_date"]
    });
    return movies;
}