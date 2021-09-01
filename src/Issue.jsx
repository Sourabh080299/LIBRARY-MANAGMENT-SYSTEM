import React ,{ useEffect , useState }from 'react';
import './issue.css';
import Nav from './Nav';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Authentication from './Authentication';
import PublishIcon from '@material-ui/icons/Publish';
import Axios from 'axios'
import { currentUser , useAuth } from "./context/AuthContext";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
const Issue=()=>{
   const [booklist, setbooklist] = useState([])
   const [reg_no, setreg_no] = useState("")
   const [newrenudate, setnewrenudate] = useState("")
  
   const [renuedatedisplay, setrenuedatedisplay] = useState("none");
   const { currentUser }=useAuth()
   useEffect(() => {
        Axios.get(`http://localhost:3001/book/issued${currentUser.email}`).then(
        (response)=>{
           console.log("------------",response.data)
         setbooklist(response.data)
        });   
     }, []);

   const submitbook=(reg_no)=>{
      const email=currentUser.email;    
      Axios.put('http://localhost:3001/book/return',{reg_no:reg_no,email:email}).then(()=>{
          alert('succesfuly returned');
        });
     }

   const renueform=()=>{
      if(renuedatedisplay=='none'){
         setrenuedatedisplay('block');
      }
      else{
         setrenuedatedisplay('none');
      }
     }
     const setreg=(r)=>{
        setreg_no(r)
     }
     const setValue=(e)=>{
      const{name,value}=e.target;
      setnewrenudate((prev)=>{
        return{
            ...prev,
            [name]:value
        }})    
    };


   const renuebook=()=>{
      setrenuedatedisplay('none');
      const email=currentUser.email;
      console.log('.............>>>>>',reg_no,newrenudate)        
      Axios.put('http://localhost:3001/book/renue',{reg_no:reg_no,email:email,newrenudate:newrenudate}).then(()=>{
          alert('succesfuly renued');
        });
     }
    return<>
           <div className='issue'>
           <br></br>
           <h2 style={{backgroundColor:'rgba(121, 119, 60, 0.651)'}}>Your Issued books</h2>
           <Nav></Nav>
           <div className='renue' style={{display:renuedatedisplay}}>
                  <CancelIcon onClick={renueform} style={{fontSize:'35px'}}></CancelIcon>
                  <form>
                  <br></br>
                     <h4>Enter New Due Date</h4>
                     <span>➡️</span><input type='date' onChange={setValue}  placeholder='enter your fname'  name='fname' ></input><br></br>
                     <Button onClick={renuebook}>Renue</Button>
                  </form>
           </div>
              <table style={{width:'100%'}}>              
               <tr>
                  <th>book_poster</th>
                  <th>book_name</th>
                  <th>bookid</th>
                  <th>bookcategory</th>
                  <th>bookprice</th>
                  <th>reg_no</th>
                  <th>title</th>
                  <th>book_due_date</th>
                  <th>book_issue_date</th>
                  <th>renue_book</th>
                  <th>submit_book</th>
               </tr> 
               {booklist.map((val)=>{
                  return<tr>
                  <td><img style={{width:'100px',height:'100px'}} src='/image/b2.jpg' alt='image not find'></img></td>
                  <td>{val.bookname}</td>
                  <td>{val.bookid}</td>
                  <td>{val.bookcategory}</td>
                  <td>{val.price}</td>
                  <td>{val.reg_no}</td>
                  <td>{val.title}</td>
                  <td>{val.return_date}</td>
                  <td>{val.issue_date}</td>
                  <td onClick={renueform}><button  onClick={()=>{setreg(val.reg_no)}}>renue<AutorenewIcon></AutorenewIcon></button></td>
                  <td><button onClick={()=>{submitbook(val.reg_no)}}>submit<PublishIcon></PublishIcon></button></td>
                 </tr> 
               })}
            </table>               
           </div>
          </>
}
export default Issue;
