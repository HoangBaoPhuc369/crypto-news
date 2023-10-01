import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import image1 from '../../assets/images/test/1.jpg';
import image2 from '../../assets/images/test/2.jpg';
import image3 from '../../assets/images/test/3.jpg';
import image4 from '../../assets/images/test/4.jpg';

const MainBanner = () => {
    return (
        <Grid item container spacing={2} mt={1.5}>
            <Grid item xs={12} lg={6}>
                <Box sx={{ height: '546px', width: '100%', position: 'relative' }}>
                    <img
                        // src={image1}
                        src="https://crypto.news/app/uploads/2023/09/crypto-news-Police-seizing-bitcoin-mining-machines-in-Venezuela02.webp"
                        style={{ borderRadius: '15px', width: 'inherit', height: '100%', objectFit: 'cover' }}
                        alt=""
                        loading="lazy"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            height: '200px',
                            width: 'inherit',
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                            bottom: 0,
                            borderRadius: ' 0  0 15px 15px',
                            display: 'flex',
                            // alignItems: 'center',
                            justifyContent: 'flex-end',
                            padding: '20px 0px',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <Typography sx={{ fontSize: '28px', color: '#fff', fontWeight: '600', lineHeight: '1.3', padding: '0 25px' }}>
                            Cryptocurrency awareness vs knowledge: To educate to empower | Opinion
                        </Typography>
                        <Chip
                            label="News"
                            sx={{
                                width: '60px',
                                borderRadius: '4px',
                                background: '#dd0802',
                                color: '#fff',
                                height: '25px',
                                margin: '0 25px'
                            }}
                        />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                height: '258px',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/09/crypto-news-GMO-Media-to-Launch-a-Verse-on-Oasys01.webp"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    height: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    // alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography sx={{ fontSize: '20px', color: '#fff', fontWeight: '600', lineHeight: '1.3', px: '25px' }}>
                                    AI won’t realize its potential without web3 | Opinion{' '}
                                </Typography>
                                <Chip
                                    label="NFT"
                                    sx={{
                                        width: '60px',
                                        borderRadius: '4px',
                                        background: '#dd0802',
                                        color: '#fff',
                                        height: '25px',
                                        margin: '0 25px'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/09/crypto-news-two-people-shaking-hands-office-background-day-light-low-poly-styl-v5.2.png"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    minHeight: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    // alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography sx={{ fontSize: '20px', color: '#fff', fontWeight: '600', lineHeight: '1.3', px: '25px' }}>
                                    PepeCoin and ApeCoin fall while THORChain and InQubeta rise
                                </Typography>
                                <Chip
                                    label="Partner"
                                    sx={{
                                        width: '80px',
                                        borderRadius: '4px',
                                        background: '#dd0802',
                                        color: '#fff',
                                        height: '25px',
                                        margin: '0 25px'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative'
                            }}
                        >
                            <img
                                src="https://crypto.news/app/uploads/2023/06/crypto-news-Vitalik-Buterin-front-side-portrait-Ethereum-background-day-light-low-poly-st-v5.1.jpg"
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    minHeight: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    // alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography sx={{ fontSize: '20px', color: '#fff', fontWeight: '600', lineHeight: '1.3', px: '25px' }}>
                                    Year after FTX collapse: what to expect from SBF trial
                                </Typography>
                                <Chip
                                    label="Opinion"
                                    sx={{
                                        width: '70px',
                                        borderRadius: '4px',
                                        background: '#dd0802',
                                        color: '#fff',
                                        height: '25px',
                                        margin: '0 25px'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainBanner;
