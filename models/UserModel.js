import pool from '../config/db.js';
import validator from "validator";
import bcrypt from "bcryptjs";

export const createUser = async (name, email, password) => {
    if(name.trim() ==='' ||
       email.trim() ==='' ||
       password.trim() === '') {
        const error = new TypeError (
            'Name, Email and Password are required.'
        );
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isEmail(email)) {
        const error = new TypeError ('Invalid email address.');
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isStrongPassword(password)) {
        const error = new TypeError (
            'Password is weak. It must be at least 8 characters long and include a number and a special character.'
        )
        error.statusCode = 400;
        throw error;
    }

    const [user] = await pool.query (
        "SELECT email FROM user WHERE email = ?", [email]
        );

    if(user.length === 1) {
        const error = new Error (`The ${email} email is already in use.`);
        error.statusCode = 400;
        throw error;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query (
        "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
    );

    return newUser;
};



export const login = async (email, password) => {
    if(email.trim() ==='' ||
       password.trim() === '') {
        const error = new Error ('Email and Password are required.');
        error.statusCode = 400;
        throw error;
    }

    const [user] = await pool.query (
        "SELECT * FROM user WHERE email = ?", [email]
    );

    if(user.length === 0) {
        const error = new Error (`An account with email ${email} does not exist.`);
        error.statusCode = 400;
        throw error;
    }
};
