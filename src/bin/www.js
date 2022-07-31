const www = require('src/app');
const PORT = process.env.PORT || 3030;
const sequelize = require('src/database/index');

const force = process.env.NODE_ENV === 'development';
sequelize.sync(force)
    .then(()=>{
        console.log('Models sync')
        console.clear();
        www.listen(PORT, ()=>{
            console.log(`SERVER START AT PORT ${PORT}`)
        })
    })
    .catch((err)=>{
        console.error(err)
    })
