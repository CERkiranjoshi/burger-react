import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-kiran-burger.firebaseio.com/'
});

export default instance;