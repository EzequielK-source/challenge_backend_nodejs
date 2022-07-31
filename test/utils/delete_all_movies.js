const { Pool } = require('pg')
module.exports = async() => {
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
        pool.connect();
        pool.query('DELETE FROM movies')
        pool.end();
    } catch (err) {
        console.error(err)
    }
    return true;
}