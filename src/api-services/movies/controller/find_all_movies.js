const MoviesModel = require('src/api-services/movies/model');
module.exports = async()=>{
    /**
     * Find all persisted movies and return it
     */
    const movies = await MoviesModel.findAll({
        attributes:["image", "title", "creation_date"]
    });
    return movies;
}