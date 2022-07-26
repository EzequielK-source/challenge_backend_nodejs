//chai sets and configs
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');

describe('App test', () => {
    it('App is working up', (done) => {
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
});