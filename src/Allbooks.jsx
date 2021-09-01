import React, { useState ,useEffect } from "react";
import './allbooks.css';
import Nav from './Nav';
import Axios from 'axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddBoxIcon from '@material-ui/icons/AddBox';
import UpdateIcon from '@material-ui/icons/Update';
const Allbooks=()=>{
   const [booklist,setbooklist]=useState([]);
   useEffect(() => {
      Axios.get('http://localhost:3001/book').then(
        (response)=>{
          setbooklist(response.data);
          console.log("pppppppp",response.data);
        });
     }, []); 
     
     const issuebook=(bookid)=>{
            Axios.post('http://localhost:3001/issue/book',bookid);                        
     }
    return<>
           <div className='books'>
            <br></br>
           <h2 style={{backgroundColor:'rgba(121, 119, 60, 0.651)'}}>All books in library</h2>
              <Nav></Nav>
              <table style={{width:'100%'}}>              
               <tr>                 
                  <th>book_poster</th>
                  <th>book_id</th>
                  <th>book_name</th>                 
                  <th>book_title</th>
                  <th>edition</th>
                  <th>bookcategory</th>
                  <th>Price</th>
                  <th>quantity</th>
                  <th>publishing_date</th>                  
                  <th>avilable</th>
                  <th>add_to_issue_book</th>
               </tr> 
               {booklist.map((val)=>{
                   return<tr>               
                  <td><img style={{width:'100px',height:'100px'}} src='/image/b2.jpg' alt='image not find'></img></td>
                  <td>{val.bookid}</td>
                  <td>{val.bookname}</td>
                  <td>{val.title}</td>
                  <td>{val.edition}</td>
                  <td>{val.bookcategory}</td>
                  <td>{val.price}</td>
                  <td>{val.quantity}</td>
                  <td>{val.publishing_date}</td>
                  <td>{val.quantity>1 ? 'yes': 'no'}</td>
                  <td><a href='/home/user/books/issue' onClick={()=>{issuebook(val.bookid)}}><AddBoxIcon></AddBoxIcon></a></td>
               </tr>
               })}                         
                         
            </table>               
           </div>
          </>
}
export default Allbooks;
