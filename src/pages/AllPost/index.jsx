import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import TitleBody from '../../components/title/TitleBody';
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import Pagination from '@mui/material/Pagination';

const AllPost = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <TitleBody title="Today Best News" />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={1.5}>
                    {_.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    borderRadius: '12px',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src="https://crypto.news/app/uploads/2023/11/crypto-news-The-fall-of-FTX04.webp"
                                    style={{ width: '100%', height: '190px', borderRadius: '12px', objectFit: 'cover' }}
                                    alt=""
                                    loading="lazy"
                                />
                                <Typography
                                    sx={{
                                        color: '#3E3232',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        margin: '16px 0',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        overflow: 'hidden'
                                    }}
                                >
                                    The fall of FTX: A tale of hubris in the crypto world | Opinion
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(62, 50, 50, 0.75)',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        marginBottom: '16px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        overflow: 'hidden'
                                    }}
                                >
                                    In the world of technology and cryptocurrency, a world where everyone seems to be a “founder”, “leader”
                                    or “entrepreneur”, one word that seems to persistently hover in the atmosphere is “arrogance.”
                                </Typography>
                                <Box
                                    sx={{
                                        padding: '13px 16px',
                                        borderRadius: '12px',
                                        background: '#F5F5F5'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                                        <img
                                            src="https://crypto.news/app/uploads/2023/10/crypto-news-BAD-Idea-AI04.webp"
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
                                                John
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
                                                {moment(new Date()).format('MMMM DD, YYYY')}
                                            </Typography>
                                        </Box>
                                        <VisibilityIcon sx={{ color: 'grey' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    <Grid item xs={12} mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AllPost;
