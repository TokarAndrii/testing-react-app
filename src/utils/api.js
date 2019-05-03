import axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

const getPosts = () => {
    return axiosInstance.get('posts')
        .then(resp => {
            return resp.data;
        })
};


export default { getPosts }