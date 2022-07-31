//chai sets and configs
const chai = require('chai')
    , chaiExclude = require('chai-exclude')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const {v4: uuidv4} = require('uuid')
const app = require('src/app');
const MovieModel = require('src/api-services/movies/model')
describe('GET METHOD', () => {
    it('GET method', (done) => {
        request(app)
            .get('/characters')
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200)
                expect(res).to.be.json;
                expect(res.body).to.have.property('characters')
                done();
            })
    });
    it('GET method filtered for age', (done) => {
        const expecetedAge = 15;
        request(app)
            .get(`/characters?age=${expecetedAge}`)
            .end((err, res) => {
                if (err) done(err);

                expect(res).to.have.status(200)
                expect(res).to.be.json;
                expect(res.body).to.have.property('characters')
                const { characters } = res.body;
                expect(characters).to.be.instanceOf(Array);

                if (characters.length > 0) {
                    expect(res.body.characters[0]).to.have.property('age').equal(expecetedAge)
                }

                done();
            })
    });
    
    it('GET method filtered for name', (done) => {
        const name = 'option';
        request(app)
            .get(`/characters?name=${name}`)
            .end((err, res) => {
                if (err) done(err);

                expect(res).to.have.status(200)
                expect(res).to.be.json;
                expect(res.body).to.have.property('characters')
                const { characters } = res.body;
                expect(characters).to.be.instanceOf(Array);

                if (characters.length > 0) {
                    expect(res.body.characters[0]).to.have.property('name').startsWith(name)
                }
                done();
            })
    });
    describe('Filter for movieId', () => { 
        let movieId;
        let movieTitle;
        before(async() => {
            await MovieModel.create({
                ID: uuidv4(),
                title: 'test'
            })
            .then((movie)=>{
                if(!movie) throw Error('movie not found')

                movieId = movie.ID
                movieTitle = movie.title
            })
        });
        it('GET method filtered for movie', (done) => {
            request(app)
                .get(`/characters?movie=${movieId}`)
                .end((err, res) => {
                    if (err) done(err);

                    expect(res).to.have.status(200)
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('characters').instanceof(Array)
                    expect(res.body).to.have.property('movie_title').equal(movieTitle);
                    const characters = res.body.characters;
                    if(characters.length > 0){
                        expect(characters[0]).to.have.property('name')
                        expect(characters[0]).to.have.property('age')
                        expect(characters[0]).to.have.property('weight')
                        expect(characters[0]).to.have.property('history')
                        expect(characters[0]).to.have.property('ID')
                    }
                    done();
                })
        });

        after(async() => {
           await MovieModel.destroy({
            where:{
                ID: movieId
            }
           }) 
        });
    });
});