import { type } from "@testing-library/user-event/dist/type";
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

const getQuestionById = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuizz = (data) => {
    return axios.post('/api/v1/quiz-submit', { ...data })
}

const postCreateNewQuizz = (description, name, type, image) => {
    const data = new FormData();
    data.append('description', description)
    data.append('name', name);
    data.append('difficulty', type);
    data.append('quizImage', image);

    return axios.post('/api/v1/quiz', data)
}

const getAllQuizForAdmin = () => {
    return axios.get('/api/v1/quiz/all')
}

const DeleteQuizz = (id) => {
    return axios.delete(`/api/v1/quiz/${id}`)
}

const UpdateQuizz = (id, name, description, difficulty, quizImage) => {
    const data = new FormData();
    data.append('id', id)
    data.append('name', name)
    data.append('description', description);
    data.append('difficulty', difficulty);
    data.append('quizImage', quizImage);

    return axios.put('/api/v1/quiz', data)
}

export {
    postCreateNewUser, getAllUsers, putUpdateUsers, deleteUser, getUserWithPaginate, postLogin, postRegister, getQuizbyUser, getQuestionById, postSubmitQuizz,
    postCreateNewQuizz, getAllQuizForAdmin, DeleteQuizz, UpdateQuizz
}