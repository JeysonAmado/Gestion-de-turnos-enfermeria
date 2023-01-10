const getConnectionDatabase = require('./DatabaseConnection')

async function getAllNurses(){
    const client ='uwu';
    //const nurses = await client.query('select * from beds');
    return client;
} 

module.exports = getAllNurses;