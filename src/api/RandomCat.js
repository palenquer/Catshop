import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images'
})

export const catSearch = async(url, setData) => {
    const response = await api.get(url)
    setData(response.data)
}