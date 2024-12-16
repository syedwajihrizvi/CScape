import axios from "axios";

const url = import.meta.env.PROD ? 
        'https://young-beyond-42845-2867f1d39669.herokuapp.com/cscape/api' : 
        'http://localhost:3000/cscape/api/'

export const apiClient = axios.create({
    baseURL: url
})