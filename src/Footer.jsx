import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
const Footer=()=>{
    return<>

              <div className='footer'>
                 <div>
                    <h4> All copyrights reserved ©️ 2021 </h4>
                    <p> developed by jyoti and sourabh patel</p>
                 </div>
                 <div className='contact'>
                   <ul>
                     <a href="#"><li><FacebookIcon className='icon'  style={{fontSize:'40px'}}></FacebookIcon></li></a>
                     <a href="#"><li><InstagramIcon className='icon' style={{fontSize:'40px'}}></InstagramIcon></li></a>
                     <a href="#"><li><TwitterIcon className='icon' style={{fontSize:'40px'}}></TwitterIcon></li></a>
                     <a href="#"><li><LinkedInIcon className='icon' style={{fontSize:'40px'}}></LinkedInIcon></li></a>
                     <a href="#"><li><GitHubIcon className='icon' style={{fontSize:'40px'}}></GitHubIcon></li></a>
                    </ul>
                 </div>
                 
              </div>             
    </>
}
export default Footer;