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
const sequelize = require('src/database/index')
describe('CharacterRouter test', () => {
    describe('GET METHOD', () => {
        let characterOne;
        let characterTwo;
        let characterThree;
        before(async () => {
            //ID,image,name,age,weight,history
            // await sequelize.sync({force:true})
            characterOne = {
                image: 'optionA',
                name: 'optionA',
                age: 9,
                weight: 123,
                history: "asdasdasd asdas"
            }
            characterTwo = {
                image: 'optionB',
                name: 'optionB',
                age: 90,
                weight: 123,
                history: "asdasdasd asdas"
            }
            characterThree = {
                image: 'optionC',
                name: 'optionC',
                age: 15,
                weight: 123,
                history: "asdasdasd asdas"
            }
            const characterCollection = [
                characterOne,
                characterTwo,
                characterThree
            ]
            // await CreateCharacterCollection(characterCollection);
        });
        it('GET method', (done) => {
            request(app)
                .get('/characters')
                .end((err, res) => {
                    if (err) done(err);

                    expect(res).to.have.status(200)
                    expect(res).to.be.json;
                    expect(res.body).to.have.property('characters')
                    expect(res.body.characters).excluding('ID').to.be.deep.equal([
                        characterOne,
                        characterTwo,
                        characterThree
                    ])
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
    });
});