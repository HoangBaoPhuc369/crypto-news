import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import TitleBody from '../title/TitleBody';
import Pagination from '@mui/material/Pagination';

const SearchPage = () => {
    const { text } = useParams();

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <TitleBody title={`results for ${text}`} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={3}>
                {_.map([1, 2, 3, 4, 5, 6], (item, index) => {
                    return (
                        <Grid item xs={7}>
                            <Box
                                sx={{
                                    padding: '10px',
                                    display: 'flex',
                                    gap: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    borderRadius: '12px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src="https://crypto.news/app/uploads/2023/09/crypto-news-indian-flag-low-poly-style.jpg.webp"
                                    alt=""
                                    style={{
                                        width: '340px',
                                        height: '190px',
                                        objectFit: 'cover',
                                        borderRadius: '12px'
                                    }}
                                    loading="lazy"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#3E3232',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden'
                                            }}
                                        >
                                            Justin Sun launches ‘SAFU’ fund after HTX $8m hack
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'rgba(62, 50, 50, 0.75)',
                                                fontSize: '14px',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden'
                                            }}
                                        >
                                            Gemini, a cryptocurrency exchange co-founded
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: '5px 16px',
                                            borderRadius: '12px',
                                            background: '#F5F5F5',
                                            width: '100%',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                                            <img
                                                src="https://crypto.news/app/uploads/2023/07/Pomerdoge-POMD-to-bring-40x-more-gains-than-Pepe-PEPE-and-Shiba-Inu-SHIB05.jpg.webp"
                                                alt=""
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    objectFit: 'cover'
                                                }}
                                                loading="lazy"
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
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
                <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SearchPage;
