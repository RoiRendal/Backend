import pool from '../config/db.js';

export const getStudents = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}