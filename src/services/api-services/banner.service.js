/* eslint-disable lines-between-class-members */
import _ from 'lodash';
import axiosServices from '../../utils/axios';

class BannerApiService {
    baseApi = import.meta.env.VITE_API_BACKEND_URL;

    getBanner(data) {
        return axiosServices.get(`${this.baseApi}banners/location/${data}`);
    }
}
export default new BannerApiService();
