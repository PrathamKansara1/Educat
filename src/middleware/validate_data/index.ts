import Joi from 'joi';
import { validationMessages } from '../../helper';
const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const phonePattern = /^[0-9]{10}$/;
const addressPattern = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/;
const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
const websitePattern = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

export const dataValidate = function (obj: object | null) {

    const schema = Joi.object({
        name: Joi.string()
            .max(50)
            .min(5)
            .messages(validationMessages("name")),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .messages(validationMessages("email")),

        password: Joi.string()
            .regex(passwordPattern)
            .messages(validationMessages("password")),

        confirmPassword: Joi.ref('password'),

        avatar: Joi.string()
            .messages(validationMessages("avatar")),

        phone: Joi.string()
            .regex(phonePattern)
            .messages(validationMessages("phone")),

        address: Joi.string()
            .messages(validationMessages("address")),

        dateOfBirth: Joi.string()
            .messages(validationMessages("DOB"))
            .regex(dobPattern),

        capacityStudent: Joi.number()
            .positive()
            .messages(validationMessages('capacity of student')),

        currentStudents: Joi.number()
            .positive()
            .messages(validationMessages("current students"))
            .less(Joi.ref('capacityStudent')),

        courses: Joi.array()
            .messages(validationMessages("courses")),

        city: Joi.string()
            .messages(validationMessages("city")),

        website: Joi.string()
            .messages(validationMessages("website"))
            .regex(websitePattern),

        state: Joi.number()
            .messages(validationMessages("state"))
            .valid(1, 2, 3),

        stateCode: Joi.number()
            .messages(validationMessages("stateCode"))
            .valid(1, 2, 3, 4, 5),

        stream: Joi.array()
            .min(2)
            .messages(validationMessages("stream")),

        qualification: Joi.array()
            .min(2)
            .messages(validationMessages("qualification")),

        workingBranch: Joi.array()
            .messages(validationMessages("workingBranch")),

        workingCourse: Joi.array()
            .messages(validationMessages("workingCourse")),

        subjects: Joi.array()
            .min(2)
            .messages(validationMessages("subjects")),

        experience: Joi.number()
            .messages(validationMessages("experience")),

        subjectName: Joi.string()
            .min(1)
            .max(50)
            .messages(validationMessages("subject name")),

        // lectureStartTime: Joi.date()
        //     .timestamp()
        //     .messages(validationMessages("Lecture Start Time"))
        //     .required(),

        // lectureEndTime: Joi.date()
        //     .timestamp()
        //     .greater(Joi.ref('lectureStartTime'))
        //     .messages(validationMessages("Lecture End Time"))
        //     .required(),

        reschedule: Joi.boolean()
            .messages(validationMessages("reschedule")),

        fatherName: Joi.string()
            .min(1)
            .max(50)
            .messages(validationMessages("father name")),

        motherName: Joi.string()
            .min(1)
            .max(50)
            .messages(validationMessages("mother name")),

        enrollmentNumber: Joi.number()
            .messages(validationMessages("Enrollment Number")),

        currentStream: Joi.string()
            .messages(validationMessages("Current Stream")),

        currentSemester: Joi.number()
            .max(8)
            .messages(validationMessages("Current Semester")),

        previousDetail: Joi.object()
            .messages(validationMessages("Previous Detail")),

        designation: Joi.string()
            .max(15),

        universityState: Joi.string()
            .messages(validationMessages("University State"))
            .max(15),

        colleges: Joi.array()
            .messages(validationMessages("colleges")),

        payload: Joi.array()
            .messages(validationMessages("payload")),

    }).with('password', 'confirmPassword')
        .with('capacityStudent', 'currentStudents')
        .with('lectureStartTime', 'lectureEndTime')


    try {
        const value = schema.validate(obj);
        return value.error?.details[0].message

    } catch (error) {
        console.log(error);

    }

}

