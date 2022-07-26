const { Pool } = require('pg')
const { v4: uuidv4 } = require('uuid');
module.exports = async CharactersCollection => {
    /**
     * Creates all characters from CharacterCollection
     */
    const pool = new Pool({
        user: 'ezequielk-dev',
        host: 'localhost',
        database: 'disney_alkemy_test',
        password: 'EzequielEnMysql',
        port: 5432,
    });

    try {
        await pool.connect();
        CharactersCollection.forEach(character => {
            const { image, name, age, weight, history } = character;
            const uuid = uuidv4();
            const sqlQuery = `INSERT INTO characters("ID",image,name,age,weight,history)
            VALUES ('${uuid}','${image}','${name}',${age},${weight},'${history}')`

            pool.query(sqlQuery)
                .catch((err) => { console.log(err) })
        })
        pool.end();
    } catch (err) {
        console.error(err)
    }
}