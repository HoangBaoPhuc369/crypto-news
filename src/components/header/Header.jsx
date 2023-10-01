import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Container,
    Grid,
    InputAdornment,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    styled,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import _ from 'lodash';
import dataCrypto from '../../data/crypto';
import numeral from 'numeral';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import logo from '../../assets/images/logo-crypto-news.png';
import logo2 from '../../assets/images/logo2.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const StyledButton = styled('div')({
    cursor: 'pointer'
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* <AppBar position="sticky" color="transparent">
                
            </AppBar> */}
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'unset' }}>
                {/* Thanh ngang hiển thị giá crypto */}
                <Box sx={{ backgroundColor: '#f5f5f5' }}>
                    <Marquee speed={100} style={{ overflow: 'hidden', background: '#eeee', height: '32px' }} gradient={false}>
                        <Box sx={{ display: 'flex', p: 0 }}>
                            {_.map(_.get(dataCrypto, 'data', []), (item, index) => (
                                <Box
                                    sx={{
                                        p: '0 10px',
                                        minWidth: '220px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyItems: 'center',
                                        gap: '10px'
                                    }}
                                    key={index}
                                >
                                    <Avatar sx={{ width: 20, height: 20 }} src={`${_.get(item, 'image', '')}`} />
                                    <Box sx={{ display: 'flex', color: '#000' }} gap={0.5}>
                                        <Typography fontSize={12.8}>{_.get(item, 'name', '')}</Typography>
                                        <Typography sx={{ textTransform: 'uppercase' }} fontSize={12.8}>
                                            ({_.get(item, 'symbol', '')})
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{ display: 'flex', alignItems: 'center' }}
                                        color={_.get(item, 'price_change_percentage_1h_in_currency', '') > 0 ? '#4b8800 ' : '#c2220d'}
                                    >
                                        <Typography fontSize={12.8} fontWeight={'bold'} sx={{ marginRight: '5px' }}>
                                            ${_.get(item, 'current_price', '')}
                                        </Typography>
                                        <Typography fontSize={12.8}>
                                            ({numeral(_.get(item, 'price_change_percentage_1h_in_currency', '')).format('0.00')})
                                        </Typography>
                                        {_.get(item, 'price_change_percentage_1h_in_currency', '') > 0 ? (
                                            <ArrowDropUpIcon />
                                        ) : (
                                            <ArrowDropDownIcon />
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Marquee>
                </Box>

                <Container maxWidth="lg">
                    <img src={logo2} style={{ width: '60px', height: '60px', borderRadius: '4px', margin: '15px 0 0 0' }} alt="" />
                </Container>

                {/* Header */}
                <Box sx={{ mt: '10px' }}>
                    <Container maxWidth="lg">
                        <Toolbar
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                background: '#dd0802',
                                borderRadius: '10px',
                                height: '77px'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                                <Grid item container sx={{ display: 'flex', alignItems: 'center', gap: '34px', fontSize: '14px' }}>
                                    <Grid
                                        item
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            cursor: 'pointer',
                                            fontFamily: 'monospace'
                                        }}
                                    >
                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>News</Typography>
                                        <KeyboardArrowDownIcon />
                                    </Grid>
                                    <Grid item sx={{ cursor: 'pointer', fontFamily: 'monospace' }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Our services</Typography>
                                    </Grid>
                                    <Grid item sx={{ cursor: 'pointer', fontFamily: 'monospace' }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Project Partners</Typography>
                                    </Grid>
                                    <Grid item sx={{ cursor: 'pointer', fontFamily: 'monospace' }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Contract</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/* <Pets sx={{ display: { xs: 'block', sm: 'none' } }} /> */}

                            <Icons>
                                <TextField
                                    variant="standard"
                                    placeholder="Search Anything..."
                                    sx={{
                                        background: '#f5f5f5',
                                        borderRadius: '4px',
                                        width: '227px',
                                        '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                            display: 'none'
                                        },
                                        padding: '8px 16px',
                                        '& .MuiInputBase-input': {
                                            padding: '0',
                                            fontSize: '14px'
                                        }
                                    }}
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                ></TextField>
                                <Avatar
                                    sx={{ width: 30, height: 30 }}
                                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                />
                            </Icons>
                        </Toolbar>
                    </Container>
                </Box>
                {/* <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu> */}
            </AppBar>
        </>
    );
};

export default Header;
