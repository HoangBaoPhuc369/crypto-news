/* eslint-disable lines-between-class-members */
import _ from 'lodash';
import axiosServices from '../../utils/axios';

class PostApiService {
    baseApi = import.meta.env.VITE_API_BACKEND_URL;

    getListPostSpotlight(local) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: local,
                unpublished: 1,
                isSpotlight: 1
            }
        });
    }
}
export default new PostApiService();
