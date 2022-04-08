import React from "react";
import { Link } from 'react-router-dom';
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import Logo from "./Logo";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo>Issue Tracker</Logo>
        <Box>
          <IconButton
            component={Link}
            to='/messages'
            size="large"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Badge badgeContent={4} color="error">
              <MailIcon color="#555" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon color="#555" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            onClick={handleMenu}
            sx={{
              marginLeft: "5px",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Avatar alt="Avatar" src="/assets/images/male_avatar.png" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
