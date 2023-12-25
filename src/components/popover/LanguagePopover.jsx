import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import UsFlag from '../../assets/icons/ic_flag_us.svg';
import JpFlag from '../../assets/icons/ic_flag_jp.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getLocal } from '../../store/slices/local';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

const LANGS = [
    {
        value: 'jp',
        label: 'Japan',
        icon: JpFlag
    },
    {
        value: 'en',
        label: 'English',
        icon: UsFlag
    }
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
    const { language } = useSelector((state) => state.local);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(null);
    // const [flag, setFlag] = useState('jp');

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    // const handleSetFlag = (target) => {
    //     setFlag(target);
    // };

    const navi = useNavigate();

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                {language === 'jp' ? (
                    <img src={LANGS[0].icon} alt={LANGS[0].label} style={{ width: '32px', height: '32px' }} />
                ) : (
                    <img src={LANGS[1].icon} alt={LANGS[1].label} style={{ width: '32px', height: '32px' }} />
                )}
            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        mt: 1.5,
                        ml: 0.75,
                        width: 180,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75
                        }
                    }
                }}
            >
                <Stack spacing={0.75}>
                    {LANGS.map((option) => (
                        <MenuItem
                            key={option.value}
                            selected={language === option.value}
                            onClick={() => {
                                // handleSetFlag(option.value);
                                dispatch(getLocal(option.value));
                                handleClose();
                                navi('/');
                            }}
                        >
                            <Box component="img" alt={option.label} src={option.icon} sx={{ width: '28px', height: '28px', mr: 2 }} />
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </Popover>
        </>
    );
}
