const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "grapes",
    host: "localhost",
    database: "paspirits",
    port: 5432,
    
});

module.exports = pool;