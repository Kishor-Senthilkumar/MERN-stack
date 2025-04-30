import axios from 'axios';

const API_URL = 'http://localhost:5000/api/members';

export const createMember = async (memberData) => {
    const response = await axios.post(API_URL, memberData);
    return response.data;
};

export const getAllMembers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getMemberById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};