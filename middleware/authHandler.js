import jwt from "jsonwebtoken";
import * as UserModel from "../models/UserModel.js";

const authHandler = async (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization) {
        res.status(401).json({
            success: false,
            message: [
                {result: 'You do not have permission to access this application.'}
            ]
        });
    }

    const token = authorization.split(' ')[1];

    try {
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        const [user] = await UserModel.getUser(id);
        /* req.user = user.id; */

        next();
    } catch(e) {
        res.status(401).json({
            success: false,
            message: [
                {result: 'Unauthorized request.'}
            ]
        });
    }
};

export default authHandler;
