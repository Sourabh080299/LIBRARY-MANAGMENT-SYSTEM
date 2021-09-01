import React from 'react';
import "./home.css"
import Nav from './Nav';
import Latestbook from './Latestbook';
import Category from './Category';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import Authentication from './Authentication';
const Home=()=>{
    return<>
          <div className="home" style={ {backgroundImage:"url('/image/bg.jpg')"}}>
              <br></br>
              <h1 style={{backgroundColor:'rgb(51, 48, 4)',color:'white'}}>📚 LIBRARY MANAGMENT SYSTEM 📚</h1>
              <div className='authentication'>
                        <Authentication></Authentication>
              </div>
          </div>
          </>
}
export default Home;