import React, { useState ,useEffect,useRef } from "react";
import './home.css';
import Nav from './Nav';
import Latestbook from './Latestbook';
import Category from './Category';
import Search from './Search';

import { Link, NavLink, useHistory } from 'react-router-dom';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { currentUser, useAuth } from './context/AuthContext'
const UserHome=()=>{
    const { currentUser,logout } = useAuth()
    const [error, setError] = useState("")
    const history=useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          await logout()
          history.push("/home/user/login")
        } catch {
          setError("failed to logout")
        }    
        
      }
    return<>
<div className="home" >
<br></br>
              <h2>📚 LIBRARY MANAGMENT SYSTEM 📚</h2>
              { !currentUser && <NavLink className='login'   to="/home/user/login">Log in<MobileFriendlyIcon></MobileFriendlyIcon></NavLink>}
              { currentUser && <NavLink className='login' onClick={handleSubmit}   to="/home/user/login">Logout<MobileFriendlyIcon></MobileFriendlyIcon></NavLink>}
              <Nav></Nav>
              <div className='books_filter'>
                 <Latestbook></Latestbook> 
                 <Category></Category>
                 <Search></Search> 
              </div>
                           
          </div>
    </>
}
export default UserHome;