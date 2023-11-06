import React from 'react';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import { Box, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import CryptoApiService from '../../services/api-services/crypto.service';
import { useSelector } from 'react-redux';
import CategoryApiService from '../../services/api-services/category.service';
import _ from 'lodash';

const Home = () => {
    // const fetchCrypto = useQuery(['cryptoCurrentcy'], () => CryptoApiService.getCrypto(), {
    //     onError: (err) => {
    //         console.log(err);
    //     },
    //     onSuccess: (response) => {
    //         console.log(response);
    //     }
    // });

    const { language } = useSelector((state) => state.local);

    const qgetListCategoryList = useQuery(
        ['qgetListCategoryList', language],
        () => CategoryApiService.getListCategoryList({ data: language }),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            refetchOnWindowFocus: false
        }
    );

    return (
        <>
            <Body listCateData={_.get(qgetListCategoryList, 'data.data.data', [])} />
        </>
    );
};

export default Home;
