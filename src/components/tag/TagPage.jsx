import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';

const TagPage = () => {
    const { tag } = useParams();

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#dd0802',
                                textTransform: 'uppercase',
                                px: '10px',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '6px',
                                    background: '#dd0802',
                                    left: '0',
                                    height: '55%',
                                    width: '7px'
                                }
                            }}
                        >
                            {tag}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={2}>
                {_.map([1, 2, 3, 4, 5, 6], (item, index) => {
                    return (
                        <Grid item xs={9}>
                            <Box
                                sx={{
                                    padding: '5px 0',
                                    display: 'flex',
                                    gap: '10px',
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
        </Container>
    );
};

export default TagPage;
