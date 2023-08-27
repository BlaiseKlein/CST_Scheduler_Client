//React and CSS imports
import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaylistAddSharpIcon from '@mui/icons-material/PlaylistAddSharp';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

function Header() {
        return (
            <div className="header">
                <div className='menu'>
                    <Link to='/'>
                        <MenuIcon fontSize='inherit'/>
                    </Link>
                </div>
                <Link to='/postSchedule' className='addSchedule'>
                    <PlaylistAddSharpIcon fontSize='inherit' />
                </Link>
                <Link to='/postEvent' className='addEvent'>
                    <MoreTimeIcon fontSize='inherit' />
                </Link>
                <div className='calendar'>
                    <Link to='/'>
                        <CalendarMonthIcon fontSize='inherit'/>
                    </Link>
                </div>
                <div className='account'>
                    <AccountCircleIcon fontSize='inherit'/>
                </div>
            </div>
        )
}

export default Header