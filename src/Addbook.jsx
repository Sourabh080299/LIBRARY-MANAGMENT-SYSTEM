import React, { useState ,useEffect } from "react";
import './addbook.css';
import AdminNav from './AdminNav';
import Axios from 'axios';

const Addbook=()=>{
  const [data, setdata] = useState({bookid:'',bookname:'',title:'',edition:'',category:'',price:'',publishing_date:'',quantity:''});
  
  const setValue=(e)=>{
    const{name,value} = e.target;    
    setdata((prev)=>{
      return{
          ...prev,
          [name]:value
      }})    
  };
   
  useEffect(() => {
   Axios.get('http://localhost:3001/book').then(
     (response)=>{
       console.log(".......okkkkkkkk,,,,,....",response.data);
     });

  }, []);


  const submitdata=()=>{
    const bookid=data.bookid;
    const bookname=data.bookname;
    const title=data.title;
    const edition=data.edition;
    const category=data.category;
    const price=data.price;
    const publishing_date=data.publishing_date;
    const quantity=data.quantity;

      Axios.post('http://localhost:3001/book',{bookid:bookid,bookname:bookname,title:title,edition:edition,bookcategory:category,price:price,publishing_date:publishing_date,quantity:quantity}).then(()=>{
          alert('succesfuly inserted');
        });
  }

  return (
    <div className="addbook">
    <br></br>
    <h2>ADD NEW BOOK</h2>
    <AdminNav></AdminNav>
    <br></br>
    <div className='addbookform'>
    <form >
      
            <div>
            <h3>book id</h3>
            <span>➡️</span><input type='text' placeholder='enter book id'  name='bookid' onChange={setValue}></input><br></br>
            <h3>book name</h3>
            <span>➡️</span><input type='text' placeholder='enter book name' name='bookname' onChange={setValue}></input><br></br>
            <h3>title</h3>
            <span>➡️</span><input type='text' placeholder='enter book title' name='title' onChange={setValue}></input><br></br>
            <h3>edition</h3>
            <span>➡️</span><input type='number' placeholder='enter book edition' name='edition' onChange={setValue}></input><br></br>
            </div>
            <div>
            <h3>quantity</h3>
            <input type='number' placeholder='enter quantity of books' name='quantity' onChange={setValue}></input><br></br>
            <h3>category</h3>
            <input type='text' placeholder='enter book category' name='category' onChange={setValue}></input><br></br>
            <h3>price</h3>
            <input type='text' placeholder='Enter book price' name='price' onChange={setValue}></input><br></br>
            <h3>publishing date</h3>
            <input type='date' placeholder='Enter publishing date' name='publishing_date' onChange={setValue}></input><br></br>
            <a href='/home/admin/books' onClick={submitdata}>ADD BOOK</a><br></br>
            </div>           
            
    </form>
    </div>
    
    </div>
  );
}

export default Addbook;
