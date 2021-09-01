import React, { useState ,useEffect,useRef } from "react";
import './signup.css';
import Nav from './Nav';
import Axios from 'axios';
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { Button } from "@material-ui/core";
const Signup=()=>{
  
  const [data, setdata] = useState({fname:'',lname:'',moblienumber:'',address:'',email:'',password:'',cpassword:''});
  const fnameRef = useRef()
  const lnameRef = useRef()
  const moblienumberRef= useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const setValue=(e)=>{
    console.log("...........",data);
    const{name,value}=e.target;
    setdata((prev)=>{
      return{
          ...prev,
          [name]:value
      }})    
  };
   


  useEffect(() => {
   Axios.get('http://localhost:3001/user').then(
     (response)=>{
       console.log(".......okkkkkkkk,,,,,....",response.data);
     });

  }, []);
  

  const submitdata=()=>{
    const fname=data.fname;
    const lname=data.lname;
    const moblieNumber=data.moblieNumber;
    const address=data.address;
    const email=data.email;
    const password=data.password;
    Axios.post('http://localhost:3001/signup',{fname:fname,lname:lname,moblieNumber:moblieNumber,address:address,email:email,password:password}).then(()=>{
        alert('succesfuly inserted');
      });
}

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      submitdata();
      history.push("/home/user")
    } catch {
      setError("failed to signup")
    }

    setLoading(false)
  }



    

  return (
    <div className="signup">
    <br></br>
    <h2>Signup</h2>
    <Nav></Nav>
    <br></br>
    <div className='signupform'>
    <form onSubmit={handleSubmit}>
           {error && <h3 className='error'>🔺Alert🔺 {error}!</h3>}                    
            <div>
            <h4>First name</h4>
            <span>➡️</span><input type='text' ref={fnameRef}  placeholder='enter your fname'  name='fname' onChange={setValue}></input><br></br>
            <h4>Last name</h4>
            <span>➡️</span><input type='text' ref={fnameRef} placeholder='enter your lname' name='lname' onChange={setValue}></input><br></br>
            <h4>moblie number</h4>
            <span>➡️</span><input type='number' ref={moblienumberRef} placeholder='enter your moblie number' name='moblienumber' onChange={setValue}></input><br></br>
            <h4>Address</h4>
            <span>➡️</span><input type='textArea' placeholder='enter your address' name='address' onChange={setValue}></input><br></br>
            </div>
            
            <div>
            <h4>Email</h4>
            <input type='Email' ref={emailRef} placeholder='enter your email' name='email' onChange={setValue}></input><br></br>
            <h4>Password</h4>
            <input type='password' ref={passwordRef}  placeholder='**********' name='password' onChange={setValue}></input><br></br>
            <h4>Confirm password</h4>
            <input type='password' ref={passwordConfirmRef} placeholder='**********' name='cpassword' onChange={setValue}></input><br></br>
            <Button type="submit"  disabled={loading}>signup</Button><br></br>
            <a href='/home/user/login'>already have account? login</a>
            </div>           
            
    </form>
    </div>
    
    </div>
  );
}

export default Signup;
