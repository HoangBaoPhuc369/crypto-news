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

    getListPost(local) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: local,
                page: 1,
                page_size: 6,
                unpublished: 1,
                isSpotlight: 0
            }
        });
    }

    getListPostHotNews(local) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: local,
                page: 1,
                page_size: 10,
                sort: '-views'
            }
        });
    }

    getListPostTopPost(local) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: local,
                page: 1,
                page_size: 5,
                sort: '-views'
            }
        });
    }

    getListPostRandom(local) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: local,
                isRandom: 1,
                randomSelect: 10
            }
        });
    }

    getDetailPost(data) {
        return axiosServices.get(`${this.baseApi}posts/${_.get(data, 'id')}`, {
            params: {
                local: _.get(data, 'local')
            }
        });
    }

    createComment(data) {
        console.log({
            body: _.get(data, 'comment'),
            commentBy: {
                name: _.get(data, 'name'),
                email: _.get(data, 'email')
            }
        });

        return axiosServices.post(`${this.baseApi}posts/${_.get(data, 'id')}/comments`, {
            body: _.get(data, 'comment'),
            commentBy: {
                name: _.get(data, 'name'),
                email: _.get(data, 'email')
            }
        });
    }

    getSearchResult(data) {
        return axiosServices.get(`${this.baseApi}posts`, {
            params: {
                local: _.get(data, 'local'),
                page: _.get(data, 'page'),
                page_size: 8,
                key_word: _.get(data, 'text')
            }
        });
    }
}
export default new PostApiService();
