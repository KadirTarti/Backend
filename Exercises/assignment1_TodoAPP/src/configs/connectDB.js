// DBconnection

require("dotenv").config();

const { Sequelize } = require("sequelize");

const PSW = process.env.PSW;
const DB = process.env.DB;
const USERNAME =process.env.USERNAME
const HOST = process.env.HOST
const PORT = process.env.PORT

const {Client} = require('pg')

const client = new Client({user:USERNAME, host:HOST, database:DB, password: PSW, port: PORT})

client.connect().then(()=>{console.log('connected to PostgreSQL')})
.catch((err)=>{console.error('error connecting to the database')})

const {Pool} = require('pg')
const pool = new Pool({user:USERNAME, host:HOST, database: DB, password:PSW, port:PORT, max: 20, idleTimeoutMillis: 30000, closed});
pool.query('SELECT * FROM bbokapi  ')




// SQLite3 için Sequelize yapılandırması
const sequelize = new Sequelize(DB, USERNAME, PSW, {
  dialect: 'postgres',
  host: HOST,
});

sequelize
 .authenticate()
 .then(() => console.log("BooKAPI DB connected"))
 .catch(err => console.error("BooKAPI DB NOT connected", err));

module.exports = { sequelize, Sequelize };


// if (DB == "SQLITE") {
//   //SQLITE
//   sequelize = new Sequelize(
//     `postgres://${process.env.USERNAME}:${process.env.PSW}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`,
//     {
//       dialect: 'postgres'
//     }
//   );
// } else {
//   //POSTGRE
//   // npm install --save pg pg-hstore
//   // const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)

//   sequelize = new Sequelize(
//     `postgres://abdulkadir1:${PSW}@${HOST}/BookAPI`
//   );
// }
