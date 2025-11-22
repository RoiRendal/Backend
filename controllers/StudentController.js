import * as StudentModel from "../models/StudentModel.js";

export const fetchStudent = async (req, res) => {
    try {
        const student = await StudentModel.getStudents();
        res.status(200).json({success: true, message: student});
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export const createStudent = async (req, res) => {
    const { name, srcode, course } = req.body;

    try {
        const studentId = await StudentModel.insertStudent(name, srcode, course);
        res.status(200).json({success: true, message: `Student created with ID: ${studentId}`});
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export const editStudent = async (req, res) => {
    console.log('Request body:', req.body);

    const { studentId } = req.params;
    const { name, srcode, course } = req.body;

    try {
        const updatedId = await StudentModel.updateStudent(name, srcode, course, studentId);
        res.status(200).json({success: true, message: `Student updated with ID: ${updatedId}`});
    } catch(e) {
        console.error(e);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
};

export const deleteStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const deletedId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({success: true, message: `Student deleted with ID: ${deletedId}`});
    } catch(e) {
        console.error(e);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
};
