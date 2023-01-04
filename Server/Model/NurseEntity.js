const getConnectionDatabase = require('./DatabaseConnection')

async function getAllNurses(){
    const client = await getConnectionDatabase();
   // const nurses = await client.query('select * from beds');
    return 'Conexión Exitosa';
} 

module.exports = getAllNurses;