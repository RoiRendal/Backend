import jwt from "jsonwebtoken";
import * as UserModel from "../models/UserModel.js";

const authHandler = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: [
                { result: 'You do not have permission to access this application.' }
            ]
        });
    }

    try {
        const token = authorization.split(' ')[1];

        if (!token) {
             return res.status(401).json({
                success: false,
                message: [{ result: 'Invalid token format.' }]
            });
        }

        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const [user] = await UserModel.getUser(id);

        next();
    } catch (e) {
        return res.status(401).json({
            success: false,
            message: [
                { result: 'Unauthorized request.' }
            ]
        });
    }
};

export default authHandler;
