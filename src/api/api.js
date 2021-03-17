import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cat-fact.herokuapp.com/facts'
})

export const search = async(url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}