import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const createMember = async (memberData) => {
    const response = await api.post('/members', memberData);
    return response.data;
};

export const getAllMembers = async () => {
    const response = await api.get('/members');
    return response.data;
};

export const getMemberById = async (id) => {
    const response = await api.get(`/members/${id}`);
    return response.data;
};