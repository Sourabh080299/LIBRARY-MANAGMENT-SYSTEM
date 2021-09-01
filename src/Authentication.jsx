import React from 'react';
import './authentication.css';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
const Authentication=()=>{
    return<>
           <div className='admin'>
                 <img style={{width:'350px',height:'350px'}} src='image/admin.png' alt='image not find'></img>
                 <NavLink className='button'  to="/home/admin"><PhonelinkSetupIcon></PhonelinkSetupIcon>Admin</NavLink>
           </div>
           <div className='user'>
                 <img  style={{width:'350px',height:'350px'}} src='image/user.png' alt='image not find'></img>
                 <NavLink className='button'  to="/home/user"><AccountCircleIcon style={{fontSize:'25px'}}></AccountCircleIcon>User</NavLink>
           </div>
          </>
}
export default Authentication;