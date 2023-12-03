import axiosServices from '../../utils/axios';

class CryptoApiService {
    baseApi = import.meta.env.VITE_API_CRYPTO_URL;
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
