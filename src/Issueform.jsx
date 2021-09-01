import React, { useState} from "react";
import './issueform.css';
import Nav from './Nav';
import Axios from 'axios';
import { currentUser,useAuth } from './context/AuthContext'

const Issueform=()=>{
  const [data, setdata] = useState({bookid:'',quantity:'',issue_date:'',return_date:''});
  const { currentUser }=useAuth()


  const setValue=(e)=>{
    const{name,value}=e.target;
    setdata((prev)=>{
      return{
          ...prev,
          [name]:value
      }})    
  };


  const submitdata=()=>{
    const issue_date=data.issue_date;
    const return_date=data.return_date;
    const bookid=data.bookid;
    const quantity=data.quantity;
    const email=currentUser.email;
    console.log(data);
      Axios.put('http://localhost:3001/issue/book',{bookid:bookid,quantity:quantity,issue_date:issue_date,return_date:return_date,email:email}).then(()=>{
          alert('succesfuly issued');
          console.log('succesfuly issued');
        });
  }

  return (
    <div className="issuebook">
    <br></br>
    <h2>ISSUE BOOK DETAILS</h2>
    <Nav></Nav>
    <br></br>
    <div className='issuebookform'>
    <form >
      
            <div>
            <h3>bookid</h3>
            <span>➡️</span><input type='text' placeholder='enter bookid' name='bookid' onChange={setValue}></input><br></br>
            <h3>issue_date</h3>
            <span>➡️</span><input type='date'  name='issue_date' onChange={setValue}></input><br></br>
            <h3>quantity</h3>
            <span>➡️</span><input type='number' placeholder='enter quantity of books' name='quantity' onChange={setValue}></input><br></br>        
            <h3>return_date</h3>
            <span>➡️</span><input type='date' name='return_date' onChange={setValue}></input><br></br>
            <span>➡️</span><a href='#' onClick={submitdata}>ISSUE BOOK</a><br></br>
            </div>           
            
    </form>
    </div>
    </div>
  );
}

export default Issueform;
