import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a1e5b.firebaseio.com/'
});

export default instance;
