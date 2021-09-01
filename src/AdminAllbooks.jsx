import React, { useState ,useEffect } from "react";
import './allbooks.css';
import AdminNav from './AdminNav';
import Axios from 'axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddBoxIcon from '@material-ui/icons/AddBox';
import UpdateIcon from '@material-ui/icons/Update';
const AdminAllbooks=()=>{
   const [booklist,setbooklist]=useState([]);
   useEffect(() => {
      Axios.get('http://localhost:3001/book').then(
        (response)=>{
          setbooklist(response.data);
        });
     }, []); 
     
     const deletebook=(bookid)=>{
            Axios.delete(`http://localhost:3001/delete/book${bookid}`);                        
     }
    return<>
           <div className='books'>
            <br></br>
           <h2 style={{backgroundColor:'rgba(121, 119, 60, 0.651)'}}>All books in library<a href='/home/admin/addbook/'>| add new book |<AddBoxIcon></AddBoxIcon></a></h2>
              <AdminNav></AdminNav>
              <table style={{width:'100%'}}>              
               <tr>                 
                  <th>book_poster</th>
                  <th>book_id</th>
                  <th>book_name</th>
                  <th>book_author</th>                  
                  <th>renue_title</th>
                  <th>publishing_date</th>
                  <th>avilable</th>
                  <th>remove_book</th>
                  <th>update_book</th>
               </tr> 
               {booklist.map((val)=>{
                   return<tr>               
                  <td><img style={{width:'100px',height:'100px'}} src='/image/b2.jpg' alt='image not find'></img></td>
                  <td>{val.bookid}</td>
                  <td>{val.bookname}</td>
                  <td>{val.price}</td>
                  <td>{val.title}</td>
                  <td>{val.publishing_date}</td>
                  <td>{val.quantity>1 ? 'yes': 'no'}</td>
                  <td><button onClick={()=>{deletebook(val.bookid)}}><DeleteForeverIcon></DeleteForeverIcon></button></td>
                  <td><a href='/home/admin/book/update'><UpdateIcon></UpdateIcon></a></td>
               </tr>
               })}                         
                         
            </table>               
           </div>
          </>
}
export default AdminAllbooks;
