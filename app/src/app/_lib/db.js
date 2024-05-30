'use server';
import mysql from 'mysql2/promise';
const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});
export default async function excuteQuery({ query, values }) {
    try {
        const [results, field] = await connection.query(query, values);
        return results;
    } catch (error) {
        console.log(error)
        throw new Error("failed");
    }
}