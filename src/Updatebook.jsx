import React, { useState ,useEffect } from "react";
import './updatebook.css';
import Nav from './Nav';
import Axios from 'axios';
import AdminNav from "./AdminNav";

const Updatebook=()=>{
  const [data, setdata] = useState({bookid:'',bookname:'',title:'',edition:'',category:'',price:'',publishing_date:'',quantity:'',publisheremail:''});
  const setValue=(e)=>{
    const{name,value}=e.target;
    setdata((prev)=>{
      return{
          ...prev,
          [name]:value
      }})    
  };


  const submitdata=()=>{
    const bookid=data.bookid;
    const bookname=data.bookname;
    const title=data.title;
    const edition=data.edition;
    const category=data.category;
    const price=data.price;
    const publishing_date=data.publishing_date;
    const quantity=data.quantity;
    const publisheremail=data.publisheremail;

     
      Axios.put('http://localhost:3001/update/book',{bookid:bookid,bookname:bookname,title:title,edition:edition,category:category,price:price,publishing_date:publishing_date,quantity:quantity,publisheremail:publisheremail}).then(()=>{
          alert('succesfuly upadted');
        });
  }

  return (
    <div className="updatebook">
    <br></br>
    <h2>UPDATE BOOK DETAILS</h2>
    <AdminNav></AdminNav>
    <br></br>
    <div className='updatebookform'>
    <form >
            <div>
            <h3>bookid</h3>
            <span>➡️</span><input type='text' placeholder='enter bookid' name='bookid' onChange={setValue}></input><br></br>
            <h3>book name</h3>
            <span>➡️</span><input type='text' placeholder='enter book name' name='bookname' onChange={setValue}></input><br></br>
            <h3>title</h3>
            <span>➡️</span><input type='text' placeholder='enter book title' name='title' onChange={setValue}></input><br></br>
            <h3>edition</h3>
            <span>➡️</span><input type='number' placeholder='enter book edition' name='edition' onChange={setValue}></input><br></br>
            <h3>quantity</h3>
            <span>➡️</span><input type='number' placeholder='enter quantity of books' name='quantity' onChange={setValue}></input><br></br>
            </div>
            <div>    
                    
            <h3>category</h3>
            <input type='text' placeholder='enter book category' name='category' onChange={setValue}></input><br></br>
            <h3>price</h3>
            <input type='text' placeholder='Enter book price' name='price' onChange={setValue}></input><br></br>
            <h3>publishing date</h3>
            <input type='date' placeholder='Enter publishing date' name='publishing_date' onChange={setValue}></input><br></br>
            <h3>publishing eamil</h3>
            <input type='email' placeholder='Enter publisher email' name='publisheremail' onChange={setValue}></input><br></br>
            <a href='#' onClick={submitdata}>UPDATE BOOK DETAILS</a><br></br>
            </div>           
            
    </form>
    </div>
    
    </div>
  );
}

export default Updatebook;
