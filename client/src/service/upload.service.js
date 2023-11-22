import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from 'axios'
import REACT_APP_API_URL from "./secrets";


const env = runtimeEnv()

export default class FilesService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: `${ REACT_APP_API_URL }/files`,
      withCredentials: true
    })
  }

  uploadImage = imageForm => this.apiHandler.post('/upload', imageForm)
}