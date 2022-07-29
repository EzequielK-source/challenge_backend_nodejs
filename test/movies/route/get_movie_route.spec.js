//chai sets and configs
const chai = require('chai')
    , chaiExclude = require('chai-exclude')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');

describe('GET Movies TEST', () => {
    it('Valid GET request', (done) => {
        request(app)
            .get('/movies')
            .end((err,res)=>{
                if(err) done(err);

                expect(res).to.have.status(200)

                expect(res.body).to.have.property("movies")
                expect(res.body.movies).to.be.instanceof(Array);
                done();
            })
        });
});