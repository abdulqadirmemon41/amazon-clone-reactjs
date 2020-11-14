import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './context/StateProvider';
import { auth } from './config/firebase';

function App() {
     const [{user},dispatch] = useStateValue();
      //useEffect <<<<
     //Piece of code which runs on a given condition
     useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(authUser => {
         if(authUser){
           //the user is logged in..
           dispatch({
             type:"SET_USER",
             user: authUser
           })
         }
         else{
           //the user is logged is logged out
           dispatch({
             type:"SET_USER",
             user: null
           })
         }
       })

       return () => {
         //Any cleanup operations go in here..
         unsubscribe();
       }
      
     }, [])
     console.log(user);
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path = '/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
