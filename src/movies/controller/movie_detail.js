const MovieModel = require('src/movies/model');

module.exports = async movieID =>{
    /**
     * Find Persisted Movie by ID and returns it 
     * 
     * @param movieID STRING
     * 
     */

    const movie = await MovieModel.findByPk(movieID);


    if(movie !== undefined) return movie;


    throw new Error('movie not found')
}