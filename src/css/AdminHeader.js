import React from 'react';
import { styled } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const ALogo = styled('img')({
  width: 120,
  height: 160,
});

const AdminHeader = ({ handleMenu, anchorEl, handleClose, handleLogout }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'grey.100' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href='https://ptuniv.edu.in/' target="_blank" rel="noopener noreferrer">
              <Avatar sx={{ width: 250, height: 150, bgcolor: 'transparent', margin: 1 }}>
                <ALogo src="/ptu-logo.png" alt="Logo" />
              </Avatar>
            </a>
            <Box sx={{ textAlign: 'center', marginLeft: 2 }}>
              <Typography fontSize={20} component="div" sx={{ fontWeight: 'bold', color: '#69180d', fontFamily: "Poppins" }}>
                <span style={{ display: 'inline', color: '#69180d', fontSize: 40 }}>P</span>ublic
                <span style={{ display: 'inline', color: '#69180d', fontSize: 40 }}>T</span>echnical
                <span style={{ display: 'inline', color: '#69180d', fontSize: 40 }}>U</span>NIVERSITY
              </Typography>
              <Typography fontSize={20} component="div" sx={{ color: '#69180d', fontFamily: "Trebuchet MS" }}>
                Py, India
              </Typography>
            </Box>
          </Box>
        </Box>
        <NotificationsActiveIcon sx={{ color: 'darkblue', ml: 1 }} />
        <IconButton color="inherit" onClick={handleMenu}>
          <Avatar alt="Admin" src="/static/images/avatar/1.jpg" sx={{ ml: 1 }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
