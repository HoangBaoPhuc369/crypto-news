import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import TitleBody from '../title/TitleBody';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import _ from 'lodash';
import moment from 'moment';
import 'quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import './style/detail.css';

const DetailContent = ({ post }) => {
    return (
        <>
            <Grid item xs={12} sx={{ display: 'flex', gap: '24px' }}>
                <Grid item xs={8} sx={{ margin: '20px 0' }}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            width: '100%',
                            borderRadius: '24px',
                            background: '#F5F5F5',
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                        }}
                    >
                        <Typography
                            component={'h1'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '32px 32px 10px',
                                fontSize: '30px',
                                fontWeight: '700'
                            }}
                        >
                            {_.get(post, 'title')}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={_.get(post, 'imageUrl')}
                                style={{
                                    width: 'calc(100% - 32px)',
                                    height: '450px',
                                    borderRadius: '16px',
                                    marginBottom: '16px',
                                    objectFit: 'cover',
                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                                }}
                                alt=""
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} mt={3} sx={{ display: 'flex', gap: '26px', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>
                                {moment(_.get(post, 'createdAt', new Date())).format('MMMM DD, YYYY')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <PersonIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>By {_.get(post, 'author.name')}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <CategoryIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: '14px' }}>{_.get(post, 'categoryName')}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '15px 12px 0 12px' }}>
                        <Typography
                            component={'h2'}
                            sx={{
                                display: 'flex',
                                padding: '10px 25px',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: '600',
                                color: '#444a4d',
                                wordBreak: 'break-word',
                                wordWrap: 'nowrap'
                            }}
                        >
                            {_.get(post, 'subTitle')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '0 16px 40px 16px' }}>
                        <div className="ql-editor ql-css-img">{parse(_.get(post, 'body', ''))}</div>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '0 0 30px 0' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TitleBody title="Comments" />
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
                        </Box>
                        <Box component={'p'} sx={{ margin: '0', marginBottom: '15px' }}>
                            When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at
                            the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks,
                            paddleboards, or the low-key pedal boats.fthtgjytr
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '40px 0 30px 0' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TitleBody title="Add Comment" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                        <Grid
                            xs={6}
                            sx={{
                                padding: '10px',
                                background: '#F5F5F5',
                                borderRadius: '12px',
                                height: '58px',
                                marginBottom: '10px'
                            }}
                        >
                            <TextField
                                placeholder="Name"
                                disableOutline={true}
                                variant="standard"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                        display: 'none'
                                    },
                                    marginBottom: '10px',
                                    borderRadius: '12px'
                                }}
                            ></TextField>
                        </Grid>

                        <Grid
                            xs={6}
                            sx={{ padding: '10px', background: '#F5F5F5', borderRadius: '12px', height: '58px', marginBottom: '10px' }}
                        >
                            <TextField
                                placeholder="Email"
                                disableOutline={true}
                                variant="standard"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                        display: 'none'
                                    },
                                    marginBottom: '10px',
                                    borderRadius: '12px'
                                }}
                            ></TextField>
                        </Grid>
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
                            <Button
                                sx={{
                                    float: 'right',
                                    textTransform: 'unset',
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#ffff',
                                    backgroundColor: '#de0b02',
                                    px: '15px',
                                    '&:hover': { backgroundColor: '#ea4343' }
                                }}
                                startIcon={<MessageRoundedIcon />}
                            >
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
                                        <TitleBody title="Tags" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{ padding: '0 15px 20px' }}>
                                <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    {_.map(_.get(post, 'tags', []), (item, index) => {
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
                                        <TitleBody title="Top Post" />
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

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src="https://crypto.news/app/uploads/2023/10/crypto-news-war-conflict-blurry-Near-East-background-low-poly-st-v5.2.webp"
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default DetailContent;
