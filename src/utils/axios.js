import axios from 'axios';

const axiosServices = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: import.meta.env.VITE_API_URL
});

export default axiosServices;
