import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { fakeDataPost3 } from '../../data/fakeDataPost';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TitleBody from '../title/TitleBody';

const SecondSection = () => {
    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{ marginBottom: '40px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <TitleBody title="cryptocurrency news" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 16px 10px 24px;',
                            borderRadius: '12px',
                            background: '#F5F5F5',
                            marginRight: '15px',
                            cursor: 'pointer'
                        }}
                    >
                        <Typography>Show All</Typography>
                        <KeyboardArrowRightIcon />
                    </Box>
                </Grid>

                <Grid container xs={12} spacing={2}>
                    {_.map(fakeDataPost3, (item, index) => {
                        return (
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        padding: '10px',
                                        display: 'flex',
                                        gap: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <img
                                        src={_.get(item, 'img')}
                                        alt=""
                                        style={{
                                            width: '340px',
                                            height: '190px',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                    />
                                    <Box>
                                        <Typography sx={{ color: '#3E3232', fontSize: '16px', fontWeight: '600' }}>
                                            Justin Sun launches ‘SAFU’ fund after HTX $8m hack
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(62, 50, 50, 0.75)', fontSize: '14px', marginBottom: '10px' }}>
                                            Gemini, a cryptocurrency exchange co-founded
                                        </Typography>
                                        <Box
                                            sx={{
                                                padding: '5px 16px',
                                                borderRadius: '12px',
                                                background: '#F5F5F5'
                                            }}
                                        >
                                            <Box
                                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}
                                            >
                                                <img
                                                    src="https://crypto.news/app/uploads/2023/07/Pomerdoge-POMD-to-bring-40x-more-gains-than-Pepe-PEPE-and-Shiba-Inu-SHIB05.jpg.webp"
                                                    alt=""
                                                    style={{
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '12px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <Box sx={{ flex: '1' }}>
                                                    <Typography
                                                        sx={{
                                                            lineHeight: '22px',
                                                            fontSize: '14px',
                                                            color: '3E3232',
                                                            fontWeight: '600',
                                                            letterSpacing: '0.1px'
                                                        }}
                                                    >
                                                        James
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            lineHeight: '18px',
                                                            fontSize: '12px',
                                                            color: '3E3232',
                                                            fontWeight: '500',
                                                            letterSpacing: '0.25px'
                                                        }}
                                                    >
                                                        August 18 , 2022
                                                    </Typography>
                                                </Box>
                                                <VisibilityIcon sx={{ color: 'grey' }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SecondSection;
