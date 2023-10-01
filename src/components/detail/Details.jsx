import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import ReplyIcon from '@mui/icons-material/Reply';

const Details = () => {
    return (
        <Container>
            <Grid container sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} sx={{ display: 'flex', gap: '24px' }}>
                    <Grid item xs={8} sx={{ margin: '20px 0' }}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                width: '100%',
                                borderRadius: '24px',
                                background: '#F5F5F5',
                                height: '504px',
                                position: 'relative',
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                            }}
                        >
                            <Typography
                                sx={{ display: 'flex', justifyContent: 'center', padding: '32px', fontSize: '22px', fontWeight: '600' }}
                            >
                                How to Spend the Perfect Day on Croatia’s Most Magical Island
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src="https://crypto.news/app/uploads/2023/06/crypto-news-Sam-Bankman-Fried05.jpg.webp"
                                    style={{
                                        width: 'calc(100% - 32px)',
                                        height: '450px',
                                        borderRadius: '16px',
                                        objectFit: 'cover',
                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                                    }}
                                    alt=""
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} mt={8} sx={{ display: 'flex', gap: '26px', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                                <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>July 14 , 2022</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                <PersonIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                                <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>By FTX crypto</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '8px' }}>
                                <CategoryIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                                <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>News</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{ margin: '50px 16px 70px 16px' }}>
                            <Typography variant="h6" mb={1}>
                                Don’t wait. The purpose of our lives is to be happy!
                            </Typography>
                            <Typography component={'p'} sx={{ fontSize: '15px', fontWeight: '400' }}>
                                Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the
                                natural wood found throughout the room, creating a relaxing atmosphere within the space. A wonderful
                                serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my
                                whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of
                                souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
                                <img
                                    src="https://crypto.news/app/uploads/2023/09/crypto-news-Ethereum-logo-light-green-and-white-and-black-blurry-background-v5.2.jpg.webp"
                                    alt=""
                                    style={{
                                        width: 'calc(100% - 80px)',
                                        height: '350px',
                                        borderRadius: '16px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                            <Typography variant="h6" mb={1}>
                                Not how long, but how well you have lived is the main thing.
                            </Typography>
                            <Typography component={'p'} sx={{ fontSize: '15px', fontWeight: '400' }}>
                                When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities
                                at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
                                paddleboards, or the low-key pedal boats.
                            </Typography>
                            <Typography component={'p'} sx={{ fontSize: '15px', fontWeight: '400' }}>
                                The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the
                                Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also
                                lend themselves to romance. Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food
                                are integrated to create a complete experience.
                            </Typography>
                            <Typography component={'p'} sx={{ fontSize: '15px', fontWeight: '400' }}>
                                For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special
                                features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and
                                artifacts from the restoration period of the historic area available for guests to enjoy.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ margin: '0 0 30px 0' }}>
                            <Box sx={{ position: 'relative' }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#dd0802',
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
                                    Comments
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sx={{
                                padding: '15px 20px 20px 20px',
                                background: '#F5F5F5',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '10px'
                                    }}
                                >
                                    <img
                                        src="https://crypto.news/app/uploads/2023/08/Pepe-Coin01.jpg.webp"
                                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '16px' }}
                                        alt=""
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Jon Kantner</Typography>
                                        <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                            <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '16px' }} />
                                            <Typography sx={{ fontSize: '14px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}>
                                                2022 04 July
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '100px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        textTransform: 'none',
                                        color: '#3E323280',
                                        backgroundColor: '#3E32320D'
                                    }}
                                    startIcon={<ReplyIcon />}
                                    color="error"
                                >
                                    Reply
                                </Button>
                            </Box>
                            <Box component={'p'} sx={{ margin: '0', marginBottom: '15px' }}>
                                When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities
                                at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
                                paddleboards, or the low-key pedal boats.fthtgjytr
                            </Box>

                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '15px 30px 20px 15px',
                                        flexDirection: 'column',
                                        gap: '15px',
                                        backgroundColor: '#ffff',
                                        borderRadius: '16px',
                                        width: 'calc(100% - 150px)'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px'
                                            }}
                                        >
                                            <img
                                                src="https://crypto.news/app/uploads/2023/08/Pepe-Coin01.jpg.webp"
                                                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '16px' }}
                                                alt=""
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Jon Kantner</Typography>
                                                <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                                    <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '16px' }} />
                                                    <Typography
                                                        sx={{ fontSize: '14px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}
                                                    >
                                                        2022 04 July
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box component={'p'} sx={{ margin: '0' }}>
                                        When you are ready to indulge your sense of excitement, check out the range of water- sports
                                        opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water?
                                        The resort has kayaks, paddleboards, or the low-key pedal boats.
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px'
                                            }}
                                        >
                                            <img
                                                src="https://crypto.news/app/uploads/2023/08/Pepe-Coin01.jpg.webp"
                                                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '16px' }}
                                                alt=""
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Jon Kantner</Typography>
                                                <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                                    <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '16px' }} />
                                                    <Typography
                                                        sx={{ fontSize: '14px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}
                                                    >
                                                        2022 04 July
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box component={'p'} sx={{ margin: '0' }}>
                                        When you are ready to indulge your sense of excitement, check out the range of water- sports
                                        opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water?
                                        The resort has kayaks, paddleboards, or the low-key pedal boats.
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{ margin: '40px 0 30px 0' }}>
                            <Box sx={{ position: 'relative' }}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#dd0802',
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
                                    Add Comment
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ background: '#F5F5F5', borderRadius: '24px', height: '252px', padding: '26px 20px 20px' }}>
                                <TextField
                                    placeholder="Type comment here ..."
                                    multiline
                                    maxRows={9}
                                    variant="standard"
                                    disableOutline={true}
                                    sx={{
                                        width: '100%',
                                        height: '206px',
                                        '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                            display: 'none'
                                        },
                                        marginBottom: '10px'
                                    }}
                                ></TextField>
                                <Button sx={{ float: 'right', textTransform: 'unset' }} color="error" startIcon={<SendIcon />}>
                                    Send Comment
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs={12}>
                            <Box sx={{ borderRadius: '16px', background: '#F5F5F5' }}>
                                <Grid item xs={12}>
                                    <Grid item xs={12} sx={{ margin: '20px 0 10px 0', padding: '20px 15px 0' }}>
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
                                                Tags
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sx={{ padding: '0 15px 20px' }}>
                                    <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                        {_.map(['News', 'Crypto', 'Block chain', 'Defi', 'Charts'], (item, index) => {
                                            return (
                                                <Typography
                                                    sx={{
                                                        color: '#3E3232BF',
                                                        background: '#fff',
                                                        padding: '5px 10px',
                                                        borderRadius: '12px',
                                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            );
                                        })}
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ borderRadius: '16px', background: '#F5F5F5' }}>
                                <Grid item xs={12}>
                                    <Grid item xs={12} sx={{ margin: '20px 0 10px 0', padding: '20px 15px 0' }}>
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
                                                Top Post
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sx={{ padding: '0 15px 20px' }}>
                                    <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                        {_.map(['News', 'Crypto', 'Block chain', 'Defi', 'Charts'], (item, index) => {
                                            return (
                                                <Box sx={{ display: 'flex', gap: '15px' }}>
                                                    <img
                                                        src="https://crypto.news/app/uploads/2023/09/crypto-news-The-advances-in-technology-turning-blockchain-mainstream04.webp"
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
                                                        <Typography
                                                            sx={{ fontSize: '12px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}
                                                        >
                                                            Subhead
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12} my={'25px'}>
                            <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                                <img
                                    src="https://crypto.news/app/uploads/2023/09/photo_2023-09-29_19-26-26.jpg.webp"
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} my={'25px'}>
                            <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                                <img
                                    src="https://crypto.news/app/uploads/2023/04/Japans-Prime-Minister03.jpg.webp"
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid item xs={12} sx={{ margin: '45px 0 10px 0' }}>
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
                                Relate Post
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', gap: '20px', overflow: 'hidden', padding: '10px', width: '100%' }}>
                    {_.map([1, 2, 3, 4], (item, index) => {
                        return (
                            <Box
                                sx={{
                                    width: '320px',
                                    // minHeight: '390px',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    borderRadius: '12px',
                                    padding: '10px'
                                }}
                            >
                                <img
                                    src="https://crypto.news/app/uploads/2023/09/crypto-news-Upgraded-EUR-Fiat-Wallet-Solutions03.webp"
                                    style={{ width: '100%', height: '190px', borderRadius: '12px', objectFit: 'cover' }}
                                    alt=""
                                />
                                <Typography sx={{ color: '#3E3232', fontSize: '16px', fontWeight: '600', padding: '16px 0' }}>
                                    Opening Day of Boating Season, Seattle WA
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(62, 50, 50, 0.75)',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        paddingBottom: '16px'
                                    }}
                                >
                                    Of course the Puget Sound is very watery, and where there is water, there are boats. Today is
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
                        );
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Details;
