import mysql from "mysql2/promise.js"

const pool = mysql.createPool({
    port: process.env.HOST,
    user: process.env.USER,
    password: "",
    database: process.env.DATA
});

console.log(pool);

export default pool;
