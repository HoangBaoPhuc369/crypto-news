import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ background: '#f5f5f5', padding: '2rem', marginTop: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" sx={{ color: '#888' }}>
                            About Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus justo ac nunc commodo, nec tempus neque
                            sollicitudin.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" sx={{ color: '#888' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                            123 Main Street, City, Country
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                            Phone: +1 234 567 890
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Box mt={2}>
                <Typography variant="body2" sx={{ color: '#888' }} align="center">
                    © 2023 Your Company. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
