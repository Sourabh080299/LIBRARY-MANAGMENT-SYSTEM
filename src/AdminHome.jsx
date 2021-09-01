import React from 'react';
import './home.css';
import Nav from './Nav';
import Latestbook from './Latestbook';
import AdminCategory from './AdminCategory';
import Search from './Search';
import { Link, NavLink } from 'react-router-dom';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import AdminNav from './AdminNav';
const AdminHome=()=>{
    return<>
<div className="home" >
              <br></br>
              <h2>📚 ADMIN OF LIBRARY MANAGMENT SYSTEM 📚</h2>
              <NavLink className='login'   to="/home/user/login">Log in<MobileFriendlyIcon></MobileFriendlyIcon></NavLink>
              <AdminNav></AdminNav>
              <div className='books_filter'>
                 <Latestbook></Latestbook> 
                 <AdminCategory></AdminCategory>
                 <Search></Search> 
              </div>      
          </div>
    </>
}
export default AdminHome;