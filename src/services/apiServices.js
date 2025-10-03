import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data)
}

const getAllUsers = () => {
    return axios.get('/api/v1/participant/all')
}

const putUpdateUsers = (id, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('id', id)
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data)
}

const deleteUser = (inputId) => {
    return axios.delete('/api/v1/participant', { data: { id: inputId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (userEmail, userPassword) => {
    return axios.post(`/api/v1/login`, { email: userEmail, password: userPassword, delay: 5000 })
}

const postRegister = (userEmail, userUsername, userPassword) => {
    return axios.post(`/api/v1/register`, { email: userEmail, username: userUsername, password: userPassword })
}

const getQuizbyUser = () => {
    return axios.get('/api/v1/quiz-by-participant')
}

export { postCreateNewUser, getAllUsers, putUpdateUsers, deleteUser, getUserWithPaginate, postLogin, postRegister, getQuizbyUser }