import axios from "axios";

const url = "http://localhost:3000/cscape/api/"

export const apiClient = axios.create({
    baseURL: url
})