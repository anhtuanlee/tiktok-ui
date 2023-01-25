import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
});

export const get = async (path, options = {}) => {
    const res = await httpRequest.get(path, options);
    return res.data;
};
