import axiosServices from '../../utils/axios';

class CryptoApiService {
    baseApi = 'https://api.coingecko.com/api/v3/';
    getCrypto() {
        return axiosServices.get(`${this.baseApi}coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_pag: 100,
                sparkline: false,
                price_change_percentage: '1h',
                locale: 'en'
            }
        });
    }
}
export default new CryptoApiService();
