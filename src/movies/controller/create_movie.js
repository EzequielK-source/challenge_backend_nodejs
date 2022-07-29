const {v4: uuidv4} = require('uuid')

const MovieModel = require('src/movies/model');
module.exports = async ({image,title,creation_date,qualification, ID})=>{
    /**
     * Persist Movie if name is not registered
     */
    if(ID === undefined || ID === "") ID = uuidv4();
    const movie = MovieModel.build({image,title,creation_date,qualification, ID})
    await movie.save();

    return movie;
}