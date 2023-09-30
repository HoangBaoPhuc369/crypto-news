import React from 'react';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import { Box, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import CryptoApiService from '../../services/api-services/crypto.service';

const Home = () => {
    // const fetchCrypto = useQuery(['cryptoCurrentcy'], () => CryptoApiService.getCrypto(), {
    //     onError: (err) => {
    //         console.log(err);
    //     },
    //     onSuccess: (response) => {
    //         console.log(response);
    //     }
    // });

    return (
        <>
            <Body />
        </>
    );
};

export default Home;
