//chai sets and configs
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);


const { expect, request } = chai;
//APP layer imports 
const app = require('src/app');
const DeleteAllCharacters = require('test/utils/delete_all_characters')
const DeleteAllMovies = require('test/utils/delete_all_movies')
describe('App test', () => {
    before(async() => {
        /**
         * This before works like test setup
         * 
         * 1 delete all test_db registers
         */
        await DeleteAllCharacters();
        await DeleteAllMovies();
    });
    it('App is working up', (done) => {
        request(app)
            .get('/')
            .end((err,res)=>{
                if(err) done(err);

                expect(res).to.have.status(200)
                done();
            })
    });
});