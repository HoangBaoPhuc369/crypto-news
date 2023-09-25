import { Grid } from '@mui/material';
import React from 'react';
import PlayHolderBanner from '../../../assets/images/ban_3.png';

const PromotionBanner = () => {
    return (
        <>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    <img src={PlayHolderBanner} style={{ width: '100%', height: '120px', padding: '18px 0 18px 0' }} alt="" />
                </Grid>
            </Grid>
        </>
    );
};

export default PromotionBanner;
