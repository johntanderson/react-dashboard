import React from 'react';
import './navbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="topLeft">
                <span className="logo">.DEV</span>
            </div>
            <div className="topRight">
                <div className="navbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="navbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="navbarIconContainer">
                    <Settings />
                </div>
                <img src='/assets/images/male_avatar.png' alt="avatar" className="avatar" />
            </div>
        </div>
    </div>
  )
}
