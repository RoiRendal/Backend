import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) => {
    try {
        const students = await StudentModel.getStudents();
        res.status(200).json({success: true, message: students})
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
