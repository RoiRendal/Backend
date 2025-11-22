import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await UserModel.createUser(name, email, password);
        res.status(201).json({
            success: true,
            message: [{result: "Account created successfully!", user}]
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.login(email, password);
        res.status(200).json({
            success: true,
            message: [{result: "Login successful!", token}]
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
