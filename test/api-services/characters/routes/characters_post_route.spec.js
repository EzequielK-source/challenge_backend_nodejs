//chai sets and configs
const chai = require('chai')
    ,chaiExclude = require('chai-exclude')
    ,chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)

const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');
describe('CharacterRouter POST test', () => {
    it('POST METHOD', (done) => {
        const sendRequest = {
            image: 'path/to/image',
            name: 'robert path',
            age: 111,
            weight: 11,
            history: "HIPER BLA BLA"
        }
        request(app)
            .post('/characters')
            .send(sendRequest)
            .end((err, res) => {
                if (err) done(err);

                expect(res).to.have.status(201);
                expect(res).to.be.json;

                expect(res.body).to.have.property('character')
                expect(res.body.character).excluding('ID')
                    .to
                    .be
                    .deep
                    .equal(sendRequest)
                done();
            });
    });
});