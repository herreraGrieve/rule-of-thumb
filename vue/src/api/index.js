import config from '@/config';
import axios from 'axios';

const request = axios.create({
    baseURL: config.baseApi,
    timeout: 10000,
});

export const getRulings = () =>
    request.get('/rulings');

export const updateRuling = (data = {}) =>
    request.put(`/rulings/${data.id}`, data.fields);