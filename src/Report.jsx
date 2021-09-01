import React, { useState ,useEffect } from "react";
import './allbooks.css';
import AdminNav from './AdminNav';
import Axios from 'axios';
const Report=()=>{
   const [booklist,setbooklist]=useState([]);
   useEffect(() => {
      Axios.get('http://localhost:3001/issuedbookforadmin').then(
        (response)=>{
          setbooklist(response.data);
        });
     }, []); 
    return<>
           <div className='books'>
            <br></br>
           <h2 style={{backgroundColor:'rgba(121, 119, 60, 0.651)'}}>All oks that are issued by user </h2>
              <AdminNav></AdminNav>
              <table style={{width:'100%'}}>              
               <tr>                 
                  <th>poster</th>
                  <th>reg_no</th>
                  <th>user_email</th>
                  <th>issue_date</th>
                  <th>return_date</th>                  
                  <th>bookid</th>
               </tr> 
               {booklist.map((val)=>{
                   return<tr>               
                  <td><img style={{width:'100px',height:'100px'}} src='/image/b2.jpg' alt='image not find'></img></td>
                  <td>{val.reg_no}</td>
                  <td>{val.user_email}</td>
                  <td>{val.issue_date}</td>
                  <td>{val.return_date}</td>
                  <td>{val.bookid}</td>
               </tr>
               })}                         
                         
            </table>               
           </div>
          </>
}
export default Report;
