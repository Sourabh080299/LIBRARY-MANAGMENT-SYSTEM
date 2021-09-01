import React from 'react';
import './nav.css';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import { NavLink } from 'react-router-dom';
import { colors } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Home from './Home';
const AdminNav=()=>{
      return<>
             <div className="nav">
                   <ul>                      
                      <NavLink    to="/home/admin"><HomeIcon></HomeIcon>home</NavLink>
                      <NavLink    to="/home/admin/books"><MenuBookIcon></MenuBookIcon>Books</NavLink>
                      <NavLink    to="/home/admin/report"><MenuBookIcon></MenuBookIcon>Report</NavLink>
                      <NavLink    to="/home/admin/addbook"><LocalLibraryIcon></LocalLibraryIcon>add_newbook</NavLink>
                      <NavLink    to="/home/admin/help"><HelpIcon></HelpIcon>help</NavLink>
                      <NavLink    to="/home/admin/signup" id='signup'>New user?  <span style={{color:'red'}}> sign up here</span><MobileFriendlyIcon></MobileFriendlyIcon></NavLink>
                   </ul>
             </div>
           </>
}
export default AdminNav;