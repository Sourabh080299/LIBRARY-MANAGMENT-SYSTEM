import React ,{ useEffect ,useState}from 'react';
import './category.css';
import CategoryIcon from '@material-ui/icons/Category';
import Axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
const AdminCategory=()=>{
   const [categorylist, setcategorylist] = useState([])
   const [booklist, setbooklist] = useState([])
   const [booklistdisplay,setbooklistdisplay] = useState("none");
   
   const deletebook=(bookid)=>{
    Axios.delete(`http://localhost:3001/delete/book${bookid}`);                        
     } 
   useEffect(() => {
      Axios.post('http://localhost:3001/user/category').then(
         (response)=>{
            console.log(response.data,'......>>...>>..>>')
            setcategorylist(response.data)
         })
   }, [])
   const getbookbycategory=(bookcategory)=>{
      Axios.post('http://localhost:3001/getbookbycategory',{bookcategory:bookcategory}).then(
         (response)=>{
             setbooklist(response.data)
         }
      )
   }

   const showbooklist=()=>{
      if(booklistdisplay=='none'){
         setbooklistdisplay('block');
      }
      else{
         setbooklistdisplay('none');
      }
     }
    return <>
           <div className='category'>
           <div className='booklist' style={{display:booklistdisplay}}>
           <br></br>
           <h2 style={{backgroundColor:'rgba(121, 119, 60, 0.651)'}}>All books in library</h2><CancelIcon onClick={showbooklist} style={{fontSize:'35px'}}></CancelIcon>
              <br></br>
           <div className='books' style={{minHeight:'200px'}}>
              <br></br>
              <table style={{width:'100%'}}>              
               <tr>                 
                  <th>book_poster</th>
                  <th>book_id</th>
                  <th>book_name</th>                  
                  <th>book_title</th>
                  <th>book_edition</th>
                  <th>book_category</th>
                  <th>book_price</th>
                  <th>quantity</th>
                  <th>publishing_date</th>
                  <th>avilable</th>
                  <th>delete book</th>
                  <th>update book</th>                  
                  
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
                  <td><button onClick={()=>{deletebook(val.bookid)}}><DeleteForeverIcon></DeleteForeverIcon></button></td>
                  <td><a href='/home/admin/book/update'><UpdateIcon></UpdateIcon></a></td>
               </tr>
               })}                           
            </table>               
           </div>
           </div>
           <h1><CategoryIcon></CategoryIcon>category</h1>
           <hr></hr>
                <ul>
                   {categorylist.map((val)=>{
                      return<a onClick={showbooklist}  href="#">
                            <li onClick={()=>{getbookbycategory(val.bookcategory)}}>{val.bookcategory}</li>
                            </a> 
                   })}
                </ul>
           </div>
           </>
}
export default AdminCategory;