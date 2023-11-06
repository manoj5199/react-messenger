import axios from 'axios'

export const loginUser = async(data) => {
    const getUser = await axios.post('http://localhost:5000/login',data);
    return getUser;
}

export const getInterest = async() => {
    const getUser = await axios.get('http://localhost:5000/getInterest',);
    return getUser;
}

export const getUserInterest = async(data) => {
    const getUser = await axios.post('http://localhost:5000/getUserInterest',);
    return getUser;
}

export const addUserInterest = async(data) => {
    const addUser = await axios.post('http://localhost:5000/addUserInterest',data);
    return addUser;
}

export const searchUserInterest = async(data) => {
    const InterestData = await axios.post('http://localhost:5000/searchInterest',data);
    return InterestData;
}