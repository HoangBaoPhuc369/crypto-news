import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@mui/material';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TagPage from './components/tag/TagPage';
import SearchPage from './components/search/Search';
import Details from './components/detail/Details';

function App() {
    return (
        <>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header />
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
