//chai sets and configs
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');

describe('CharacterRouter test', () => {
    describe('GET METHOD', () => {
        it('GET method', (done) => {
            request(app)
                .get('/characters')
                .end((err,res)=>{
                    if(err) done(err);
    
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
                .end((err,res)=>{
                    if(err) done(err);
    
                    expect(res).to.have.status(200)
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('characters')
                    for (const object of res.body.characters) {
                        expect(object.age).to.be.equal(expecetedAge)
                    }
                    done();
                })
        });
        it('GET method filtered for movie', (done) => {
            const movieId = 15;
            request(app)
                .get(`/characters?movie=${movieId}`)
                .end((err,res)=>{
                    if(err) done(err);
    
                    expect(res).to.have.status(200)
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('characters')
                    done();
                })
        });
    });
});