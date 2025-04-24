import axios from 'axios';

export const apiRequest = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});