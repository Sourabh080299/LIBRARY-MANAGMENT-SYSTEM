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
import { currentUser,useAuth } from './context/AuthContext'
const Nav=()=>{
      const { currentUser }=useAuth()
      return<>
             <div className="nav">
                   <ul>                      
                      <NavLink    to="/home/user"><HomeIcon></HomeIcon>home</NavLink>
                      <NavLink    to="/home/user/books"><MenuBookIcon></MenuBookIcon>Books</NavLink>
                      <NavLink    to="/home/user/issue"><LocalLibraryIcon></LocalLibraryIcon>your_issued_books</NavLink>
                      <NavLink    to="/home/user/help"><HelpIcon></HelpIcon>help</NavLink>
                      {!currentUser && <NavLink    to="/home/user/signup" id='signup'>New user?  <span style={{color:'red'}}> sign up here</span><MobileFriendlyIcon></MobileFriendlyIcon></NavLink>}
                      <NavLink    to="/home/user/profile" id='signup'>{currentUser && <h4>USER: {currentUser.email}</h4>}</NavLink>
                   </ul>
             </div>
           </>
}
export default Nav;