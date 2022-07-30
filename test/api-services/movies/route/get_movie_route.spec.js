//chai sets and configs
const chai = require('chai')
    , chaiExclude = require('chai-exclude')
    , chaiHttp = require('chai-http');
const moment = require('moment');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');
const CreateMovie = require('src/api-services/movies/controller/create_movie')
describe('GET Movies TEST', () => {
    it('Valid GET request', (done) => {
        request(app)
            .get('/movies')
            .end((err, res) => {
                if (err) done(err);

                expect(res).to.have.status(200)

                expect(res.body).to.have.property("movies")
                expect(res.body.movies).to.be.instanceof(Array);
                done();
            })
    });

    describe('ID parm request', () => {
        let idMovie;
        before(async () => {
            const movie = await CreateMovie({
                image: 'path/to/image',
                title: 'a test movie',
                creation_date: moment().format('YYYY-MM-DD'),
                qualification: 5
            })
            if(movie) {idMovie = movie.ID;}
        });
        it('View Movie detail', (done) => {
            request(app)
                .get(`/movies/${idMovie}`)
                .end((err, res) => {
                    if (err) done(err);

                    expect(res).to.have.status(200)

                    expect(res).to.be.json;


                    expect(res.body).to.have.property('movie').excluding(['ID', 'creation_date']).deep.equal({
                        image: 'path/to/image',
                        title: 'a test movie',
                        qualification: 5
                    })
                    done();
                })
        });
            
    });
});