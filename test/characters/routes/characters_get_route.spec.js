//chai sets and configs
const chai = require('chai')
    , chaiExclude = require('chai-exclude')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');
const CreateCharacterCollection = require('test/utils/create_characters_collection')
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
    it('GET method filtered for movie', (done) => {
        const movieId = 15;
        request(app)
            .get(`/characters?movie=${movieId}`)
            .end((err, res) => {
                if (err) done(err);

                expect(res).to.have.status(200)
                expect(res).to.be.json;
                expect(res.body).to.have.property('characters')
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
});