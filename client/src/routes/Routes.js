import React from 'react';

import {BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom';

// Components

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import page404 from '../components/Pageerror';


const Routes = () => {
 
  return (
    

    <Router>
   
         <Switch>    
    
         {/* <Route path="/Home" component={ Header}  />  
         <Route path="/Footer" component={ Footer} exact  />   */}
         <Route path="/" component={ MainBody}  exact />  

         <Route path="/*" component={ page404} exact />    
       </Switch>
  

      
   
   
  </Router>
  );
};

export default Routes;