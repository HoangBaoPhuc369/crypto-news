import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import _ from 'lodash';
import dataCrypto from './../data/crypto';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
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
            <AppBar position="sticky" color="transparent">
                <Box sx={{ backgroundColor: '#FFC20E' }}>
                    <Marquee speed={50} style={{ overflow: 'hidden', background: '#eeee' }} gradient={false}>
                        <List sx={{ display: 'flex', p: 0 }}>
                            {_.map(_.get(dataCrypto, 'data', []), (item, index) => (
                                <ListItem sx={{ p: '0 10px', width: '300px' }} key={index}>
                                    <ListItemText primary={`${_.get(item, 'name', '')}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Marquee>
                </Box>
            </AppBar>
            <AppBar position="sticky" sx={{ background: '#bb1919' }}>
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '1200px', margin: '0 auto' }}
                >
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        CRYPNEWS
                    </Typography>
                    {/* <Pets sx={{ display: { xs: 'block', sm: 'none' } }} /> */}
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            onClick={(e) => setOpen(true)}
                        />
                    </Icons>
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                        <Typography variant="span">John</Typography>
                    </UserBox>
                </Toolbar>
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
