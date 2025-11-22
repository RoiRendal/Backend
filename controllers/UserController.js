import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await UserModel.createUser(name, email, password);
        res.status(201).json({
            success: true,
            message: [{user}, {result: "Account created successfully!"}]
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
