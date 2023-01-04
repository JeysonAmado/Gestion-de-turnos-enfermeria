const {Client} = require('pg');

async function getConnectionDatabase(){
    try {
        const client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'jeyson',
            password: 'secret',
            database: 'nurse_shift_change'
          });
          
        await client.connect();
        console.log('GENERANDO CONEXIÓN')
        return client;
    } catch (error) {
        console.error(error.message);
    }
    
}


module.exports = getConnectionDatabase;