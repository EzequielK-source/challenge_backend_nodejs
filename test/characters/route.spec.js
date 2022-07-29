//chai sets and configs
const chai = require('chai')
    ,chaiExclude = require('chai-exclude')
    ,chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.use(chaiExclude)


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');
const CreateCharacterCollection = require('test/utils/create_characters_collection')
describe('CharacterRouter test', () => {
    describe('GET METHOD', () => {
        let characterOne;
        let characterTwo;
        let characterThree;
        before(async () => {
            //ID,image,name,age,weight,history
            characterOne = {
                image: 'optionA',
                name: 'option A',
                age: 9,
                weight: 123,
                history: "asdasdasd asdas"
            }
            characterTwo = {
                image: 'optionB',
                name: 'option B',
                age: 90,
                weight: 123,
                history: "asdasdasd asdas"
            }
            characterThree = {
                image: 'optionC',
                name: 'marcelo',
                age: 15,
                weight: 123,
                history: "asdasdasd asdas"
            }
            const characterCollection = [
                characterOne,
                characterTwo,
                characterThree
            ]
            await CreateCharacterCollection(characterCollection)
        });
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
                    for (const object of res.body.characters) {
                        expect(object.name).to.contains(name)
                    }
                    done();
                })
        });
    });
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