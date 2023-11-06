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
import { useSelector } from 'react-redux';
import _ from 'lodash';

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

   

    return (
        <>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header navData={_.get(qgetListCategoryHeader, 'data.data.data', [])} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/details/:id" element={<Details />} />
                    <Route exact path="/tags/:tag" element={<TagPage />} />
                    <Route exact path="/search/:text" element={<SearchPage />} />
                </Routes>
                <Footer />
            </Box>
        </>
    );
}

export default App;
