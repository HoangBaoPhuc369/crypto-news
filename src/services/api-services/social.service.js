/* eslint-disable lines-between-class-members */
import _ from 'lodash';
import axiosServices from '../../utils/axios';

class SocialApiService {
    baseApi = import.meta.env.VITE_API_BACKEND_URL;

    getSocial(data) {
        return axiosServices.get(`${this.baseApi}socials`, {
            params: {
                page: 1,
                page_size: 5
            }
        });
    }
}
export default new SocialApiService();
