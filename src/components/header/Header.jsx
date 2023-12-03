import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Container,
    Divider,
    Grid,
    InputAdornment,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Popover,
    Stack,
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
import logo2 from '../../assets/images/logo-white.png';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import SearchIcon from '@mui/icons-material/Search';
import { category } from '../../data/categoryData';
import { useTheme } from '@mui/material/styles';
import LanguagePopover from '../popover/LanguagePopover';
import { useNavigate } from 'react-router-dom';
import Iconify from '../iconify/Iconify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const Header = ({ cryptoData, bannerUrl, navData }) => {
    const navi = useNavigate();

    const schema = yup.object().shape({
        text: yup.string().required('Please type somethings!')
    });

    const hookForm = useForm({
        defaultValues: {
            text: ''
        },
        resolver: yupResolver(schema)
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = hookForm;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (data) => {
        hookForm.reset();
        navi(`/search/${_.get(data, 'text', '')}`);
    };

    return (
        <>
            {/* <AppBar position="sticky" color="transparent">
                
            </AppBar> */}
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'unset' }}>
                {/* Thanh ngang hiển thị giá crypto */}
                <Grid xs={12}>
                    <img src={bannerUrl} alt="" style={{ width: '100%', height: '300px', objectFit: 'cover' }} loading="lazy" />
                </Grid>

                <Box sx={{ backgroundColor: '#f5f5f5' }}>
                    <Marquee speed={100} style={{ overflow: 'hidden', background: '#eeee', height: '32px' }} gradient={false}>
                        <Box sx={{ display: 'flex', p: 0 }}>
                            {_.map(cryptoData, (item, index) => (
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

                {/* <Container maxWidth="lg">
                    <img src={logo2} style={{ width: '60px', height: '60px', borderRadius: '4px', margin: '15px 0 0 0' }} alt="" />
                </Container> */}

                {/* Header */}
                <Box sx={{ mt: '30px' }}>
                    <Container maxWidth="lg">
                        <Toolbar
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                background: '#de0b02',
                                borderRadius: '10px',
                                height: '77px'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                                <Grid
                                    item
                                    container
                                    sx={{ display: 'flex', alignItems: 'center', gap: '34px', fontSize: '14px', height: '100%' }}
                                >
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
                                        <Box onClick={() => navi('/')}>
                                            <img src={logo2} style={{ width: '60px', height: '60px', borderRadius: '4px' }} alt="" />
                                        </Box>
                                    </Grid>
                                    {_.map(navData, (item, index) => {
                                        {
                                            /* return Boolean(_.get(item, 'hasSubtab')) ? (
                                            <div>
                                                <Grid
                                                    item
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '3px',
                                                        cursor: 'pointer',
                                                        fontFamily: 'monospace',
                                                        height: '100%'
                                                    }}
                                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                    onMouseOver={handleClick}
                                                >
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                        {_.get(item, 'label', '')}
                                                    </Typography>
                                                    {anchorEl ? (
                                                        <KeyboardArrowRightRoundedIcon sx={{ transition: 'all 0.5s ease' }} />
                                                    ) : (
                                                        <KeyboardArrowDownRoundedIcon sx={{ transition: 'all 0.5s ease' }} />
                                                    )}
                                                </Grid>

                                                <Menu
                                                    id="simple-menu"
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                    MenuListProps={{ onMouseLeave: handleClose }}
                                                    PaperProps={{
                                                        style: {
                                                            width: 150
                                                        }
                                                    }}
                                                >
                                                    {_.map(_.get(category, 'data', []), (option, index) => (
                                                        <>
                                                            <MenuItem key={index} onClick={handleClose}>
                                                                {option.name}
                                                            </MenuItem>
                                                        </>
                                                    ))}
                                                </Menu>
                                            </div>
                                        ) : (
                                            <Grid item sx={{ cursor: 'pointer', fontFamily: 'monospace' }}>
                                                <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                    {_.get(item, 'label', '')}
                                                </Typography>
                                            </Grid>
                                        ); */
                                        }

                                        return (
                                            <Grid key={_.get(item, '_id', index)} item sx={{ cursor: 'pointer', fontFamily: 'monospace' }}>
                                                <Box onClick={() => navi(`/tags/${_.get(item, 'name')}/${_.get(item, '_id')}`)}>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                        {_.get(item, 'name', '')}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                            {/* <Pets sx={{ display: { xs: 'block', sm: 'none' } }} /> */}

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                                <Icons>
                                    <TextField
                                        {...hookForm.register('text')}
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
                                                    <Iconify
                                                        icon={'iconamoon:search-thin'}
                                                        sx={{ cursor: 'pointer' }}
                                                        onClick={hookForm.handleSubmit(handleSearch)}
                                                    />
                                                </InputAdornment>
                                            )
                                        }}
                                    ></TextField>
                                </Icons>
                                <LanguagePopover />
                            </Box>
                        </Toolbar>
                    </Container>
                </Box>
            </AppBar>
        </>
    );
};

export default Header;
