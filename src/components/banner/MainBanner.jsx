import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import image1 from '../../assets/images/test/1.jpg';
import image2 from '../../assets/images/test/2.jpg';
import image3 from '../../assets/images/test/3.jpg';
import image4 from '../../assets/images/test/4.jpg';

const MainBanner = () => {
    return (
        <Grid item container spacing={2} mt={1.5}>
            <Grid item xs={12} lg={6}>
                <Box sx={{ height: '546px', width: '100%' }}>
                    <img
                        // src={image1}
                        src="https://crypto.news/app/uploads/2023/09/crypto-news-Police-seizing-bitcoin-mining-machines-in-Venezuela02.webp"
                        style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                        alt=""
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                height: '258px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/09/crypto-news-GMO-Media-to-Launch-a-Verse-on-Oasys01.webp"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/09/crypto-news-two-people-shaking-hands-office-background-day-light-low-poly-styl-v5.2.png"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/06/crypto-news-Vitalik-Buterin-front-side-portrait-Ethereum-background-day-light-low-poly-st-v5.1.jpg"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainBanner;
