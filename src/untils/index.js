import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
});

export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
