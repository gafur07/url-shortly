import axios from "axios"

export const baseURL = 'https://api.shrtco.de/v2'

export const axiosClassic = axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json',
	}
})

export const axiosAPI = axios.create({
	baseURL,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('token'),
	}
})