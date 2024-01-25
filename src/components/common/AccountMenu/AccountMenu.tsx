import * as React from 'react';
import Box from '@mui/material/Box';
import AvatarMUI from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Icon} from "@iconify/react";
import UserName from "../UserName/UserName";
import {LoginType} from "../../../state/reducers/authReducer";
import UserFoto from "../Avatar/UserFoto";
import s from './AccountMenu.module.css';
import {NavLink} from "react-router-dom";
import cs from '../common.module.css';

type AccountMenuPropsType = {
    login: LoginType,
    logout: () => void,
    photo: null | string
}

export default function AccountMenu({login, logout, photo}: AccountMenuPropsType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const iconColor = "#838daa";

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AvatarMUI sx={{width: 32, height: 32, marginRight: 2}}> <UserFoto userFoto={photo}/></AvatarMUI>
                        <Typography sx={{ minWidth: 100 }}><UserName login={login} url={''}/></Typography>
                    </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={handleClose}>
                    <AvatarMUI />
                    {/*<NavLink to="/profile/28736" className={s.link}*/}
                    {/*         activeClassName={s.active}>@kudlatskaya</NavLink>*/}
                    <NavLink to={'/profile/28736'} className={cs.link}>My account</NavLink>
                </MenuItem>
                <Divider />
                <MenuItem onClick={logout}>
                    <Icon icon="material-symbols:logout" color={iconColor} />
                    <span className={s.item}>Logout</span>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}