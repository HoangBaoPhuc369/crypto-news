import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import logo2 from '../../assets/images/logo2.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import _ from 'lodash';

const Footer = () => {
    return (
        <Box sx={{ background: '#f5f5f5', padding: '2rem', marginTop: '100px' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Grid item xs={12} sx={{}}>
                            <Box sx={{ position: 'relative' }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#bb1919',
                                        px: '10px',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '6px',
                                            background: '#bb1919',
                                            left: '0',
                                            height: '55%',
                                            width: '7px'
                                        }
                                    }}
                                >
                                    About
                                </Typography>
                            </Box>
                        </Grid>
                        <img src={logo2} style={{ width: '60px', height: '60px', borderRadius: '4px', margin: '15px 0' }} alt="" />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Typography variant="body2" sx={{ color: '#888' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus justo ac nunc commodo, nec tempus
                                neque sollicitudin.
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#888', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <EmailIcon sx={{ fontSize: '16px' }} />
                                info@example.com
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#888', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <PhoneCallbackIcon sx={{ fontSize: '16px' }} />
                                info@example.com
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs={12} sx={{}}>
                            <Box sx={{ position: 'relative', marginBottom: '15px' }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#bb1919',
                                        px: '10px',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '6px',
                                            background: '#bb1919',
                                            left: '0',
                                            height: '55%',
                                            width: '7px'
                                        }
                                    }}
                                >
                                    Recent Post
                                </Typography>
                            </Box>
                        </Grid>
                        <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            {_.map(['News', 'Crypto', 'Block chain'], (item, index) => {
                                return (
                                    <Box sx={{ display: 'flex', gap: '15px' }}>
                                        <img
                                            src="https://crypto.news/app/uploads/2023/09/crypto-news-people-talk-office-background-dark-tones-sixties-retro-futuristic-illustration.jpg.webp"
                                            alt=""
                                            style={{ width: '87px', height: '87px', borderRadius: '12px', objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '5px',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Typography sx={{ fontSize: '14px', fontWeight: '600', wordWrap: 'break-word' }}>
                                                How to Spend the Perfect Day on Croatia’s Most Magical Island
                                            </Typography>
                                            <Typography sx={{ fontSize: '12px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}>
                                                Subhead
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid item xs={12} sx={{}}>
                            <Box sx={{ position: 'relative', marginBottom: '15px' }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#bb1919',
                                        px: '10px',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '6px',
                                            background: '#bb1919',
                                            left: '0',
                                            height: '55%',
                                            width: '7px'
                                        }
                                    }}
                                >
                                    Page
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>News</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Our services</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Project Partners</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Contract</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
