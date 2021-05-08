import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/users`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUser = (id, password) => api.get(`/users/${id}`);

const apis = {
	insertUser,
	getAllUsers,
	updateUser,
	deleteUserById,
	getUser,
}

export default apis