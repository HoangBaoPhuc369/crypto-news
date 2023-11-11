import { Box, Grid } from '@mui/material';
import React from 'react';
import PlayHolderBanner from '../../../assets/images/ban_3.png';

const PromotionBanner = ({ bannerUrl }) => {
    return (
        <>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    <img
                        src={bannerUrl}
                        style={{ width: '100%', height: '120px', margin: '18px 0 0 0', objectFit: 'cover', borderRadius: '8px' }}
                        alt=""
                        loading="lazy"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default PromotionBanner;
