/* eslint-disable lines-between-class-members */
import _ from 'lodash';
import axiosServices from '../../utils/axios';

class CategoryApiService {
    baseApi = import.meta.env.VITE_API_BACKEND_URL;

    getListCategoryHeader({ data }) {
        return axiosServices.get(`${this.baseApi}categories`, {
            params: {
                local: data,
                isNavHeader: 1
            }
        });
    }

    getListCategoryList({ data }) {
        return axiosServices.get(`${this.baseApi}categories`, {
            params: {
                local: data,
                isNavHeader: 0
            }
        });
    }
}
export default new CategoryApiService();
