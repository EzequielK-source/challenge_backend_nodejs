//chai sets and configs
const moment = require('moment')
const chai = require('chai')
    , chaiExclude = require('chai-exclude')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');

describe('POST Movies TEST', () => {
    it('Valid POST request', (done) => {
        request(app)
            .post('/movies')
            .send({
                image:'path/to/image',
                title: 'title',
                creation_date: moment().format('yyyy-mm-dd'),
                qualification: 5
            })
            .end((err,res)=>{
                if(err) done(err);

                expect(res).to.have.status(201)

                expect(res.body).to.have.property("status").equal('movie created')
                done();
            })
    });
});