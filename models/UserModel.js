import pool from "..config/db";
import validator from "validator";
/* import */


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
        error.statusCode = 409;
        throw error;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query (
        "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
    );

    return newUser;