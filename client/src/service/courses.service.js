import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from 'axios'
import REACT_APP_API_URL from "./secrets";


const env = runtimeEnv()

export default class CourseService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${REACT_APP_API_URL}/courses`,
            withCredentials: true
        })
    }

    getCourses = () => this.apiHandler.get('/getAllCourses')
    getRandomCourses = () => this.apiHandler.get('/sampleCourses')
    getTeacherCourses = teacherId => this.apiHandler.get(`/getTeacherCourses/${teacherId}`)
    getCourse = courseId => this.apiHandler.get(`/getOneCourse/${courseId}`)
    saveCourse = courseInfo => this.apiHandler.post(`/newCourse`, courseInfo)
    editCourse = (courseId, courseInfo) => this.apiHandler.put(`/editCourse/${courseId}`, courseInfo)
    deleteCourse = courseId => this.apiHandler.delete(`/deleteCourse/${courseId}`)
    deleteTeacherCourses = teacherId => this.apiHandler.delete(`/deleteTeacherCourses/${teacherId}`)
}