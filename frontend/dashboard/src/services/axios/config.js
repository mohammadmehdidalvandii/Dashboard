import axios from 'axios';

export const apiRequest = axios.create({
    baseURL: "https://dashboard-admin-api.chbk.app",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});