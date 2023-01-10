const Sequelize = require('sequelize');
const setupModels = require('./BaseModel');
require('dotenv').config();

const URI = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`;

const sequelize = new Sequelize(URI,{
    dialect: 'postgres',
    logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;