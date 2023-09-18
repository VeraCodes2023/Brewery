import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

const  Header:React.FC =()=> {
  return (
    <Box sx={{ width: 500 }} className="header">
            <NavLink to="/" 
              className="link"
              style={({ isActive}) => 
              {return {color: isActive ? "#1976D2" : "black"}}} >
              <Box className='navIcon'>
                <HomeIcon />
                <Typography>Home</Typography>
              </Box>
            </NavLink  >
            <NavLink to="/aboutus" 
              className="link"
            style={({ isActive}) => 
              {return {color: isActive ? "#1976D2" : "black"}}} >
              <Box className='navIcon'>
                  <InfoIcon />
                  <Typography>About Us</Typography>
              </Box>
            </NavLink>
            <NavLink to="/contact"   
              className="link"
            style={({ isActive }) => 
             {return {color: isActive ? "#1976D2" : "black"}}}>
              <Box className='navIcon'>
                  <ContactSupportIcon/>
                  <Typography>Contact Us</Typography>
              </Box>
            </NavLink>
    </Box>
  )
}
export  default Header