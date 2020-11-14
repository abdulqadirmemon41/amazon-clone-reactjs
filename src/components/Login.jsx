import React, { useState } from 'react';
import '../css/Login.css' 
import {Link, useHistory} from 'react-router-dom'
import { auth } from '../config/firebase';

function Login(props) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()
    const login = (e) => {
        e.preventDefault(); //this stops the refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //Logged in, Redirect to homepage
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
        
    const register = (e) => {
        e.preventDefault(); //this stops the refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //Created a user. and logged in, Redirect to homepage

        })
        .catch(e => alert(e.message))
    }
    return (
        <div className = "login">
            <Link to = "/">
                <img 
                className = "login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt=""/>
            </Link>

            <div className="login__container">
                 <h1>Sign in</h1>
                 <form >
                     <h5>E-mail</h5>
                      <input onChange  ={e => setEmail(e.target.value)} value = {email} type="text" />
                     <h5>Password</h5>
                      <input onChange  ={e => setPassword(e.target.value)} value = {password} type="password" />
                     <button onClick = {login} type = "submit" className = "login__signInButton">Sign In</button>
                 </form>
               <p>
                   By signing-in you agree to Amazon's Conditons of Use of Sale. Please
                   see our Privacy Notice, out Cookies Notice and our Interest-Based Ads
                   Notice.
               </p>
               <button onClick = {register} className = "login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;