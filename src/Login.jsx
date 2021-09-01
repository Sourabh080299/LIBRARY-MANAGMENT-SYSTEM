import React, { useState ,useEffect,useRef } from "react";
import './login.css';
import Nav from './Nav';
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { Button } from "@material-ui/core";
const Login=()=>{
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login }   = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/home/user")
    } catch {
      setError("login failed")
    }

    setLoading(false)
  }

   return (     
    <div className="login">
    <br></br>
    <h2>Login</h2>
    <Nav></Nav>
    <br></br>
    <div className='loginform'>
    <form onSubmit={handleSubmit}>  
            {error && <h3 className='error'>🔺Alert🔺 {error}!</h3>} 
            <h4>Email</h4>
            <span>➡️</span><input ref={emailRef} type='email' placeholder='enter your email'></input><br></br>
            <h4>Password</h4>
            <span>➡️</span><input ref={passwordRef} type='password' placeholder='**********'></input><br></br>
            <Button type="submit"  disabled={loading}>Login</Button>
            <Button>forget password?</Button><br></br>
            <a href='/home/user/signup'>new user? sign up</a>
    </form>
    </div>
    
    </div>
  );
}

export default Login;
