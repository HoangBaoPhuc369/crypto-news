import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@mui/material';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TagPage from './components/tag/TagPage';
import SearchPage from './components/search/Search';
import Details from './components/detail/Details';
import { useQuery } from 'react-query';
import CategoryApiService from './services/api-services/category.service';
import BannerApiService from './services/api-services/banner.service';
import PostApiService from './services/api-services/post.service';
import SocialApiService from './services/api-services/social.service';
import CryptoApiService from './services/api-services/crypto.service';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import AllPost from './pages/AllPost';

function App() {
    const { language } = useSelector((state) => state.local);

    const qgetListCategoryHeader = useQuery(
        ['qgetListCategoryHeader', language],
        () => CategoryApiService.getListCategoryHeader({ data: language }),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            refetchOnWindowFocus: false
        }
    );

    const qgetLargeBanner = useQuery(['qgetLargeBanner', language], () => BannerApiService.getBanner('LARGE_HEADER_BANNER'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostRecent = useQuery(['qgetListPostRecent', language], () => PostApiService.getListPostRecent(language), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListSocial = useQuery(['qgetListSocial'], () => SocialApiService.getSocial(), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const fetchCrypto = useQuery(['cryptoCurrentcy'], () => CryptoApiService.getCrypto(), {
        onError: (err) => {
            console.log(err);
        },
        onSuccess: (response) => {
            // console.log(response);
        },
        refetchInterval: 60 * 60 * 1000,
        keepPreviousData: true,
        refetchOnWindowFocus: false
    });

    return (
        <>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header
                    cryptoData={_.get(fetchCrypto, 'data.data', [])}
                    bannerUrl={_.get(qgetLargeBanner, 'data.data.bannerUrl', '')}
                    navData={_.get(qgetListCategoryHeader, 'data.data.data', [])}
                />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/details/:id" element={<Details />} />
                    <Route exact path="/tags/:tagName/:tagId" element={<TagPage />} />
                    <Route exact path="/search/:text" element={<SearchPage />} />
                    <Route exact path="/all-post" element={<AllPost />} />
                </Routes>
                <Footer
                    listPostRecent={_.get(qgetListPostRecent, 'data.data.data', [])}
                    listSocial={_.get(qgetListSocial, 'data.data.data', [])}
                />
            </Box>
        </>
    );
}

export default App;
