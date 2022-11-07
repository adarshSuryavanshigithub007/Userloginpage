import './App.css';
import React from 'react';
import Header from './header';
import {BrowserRouter,HashRouter,Routes,Route, UseParams,} from 'react-router-dom'
import Signin from './signin';
import Signup from './signup';
import Dashboard from './dashboard';
import Adminheader from './adminheader';
import Companyinfo from './companylinfo';
import Companylist from './companylist';
import Createcompany from './Create company';
import Edit from './Edit';
import Normalscreen from './normalscreen';




function App() {
  if(localStorage.getItem("vendorid")==null )
  {
    return(
      <HashRouter>
      <Header/>
     <Routes>
      
      <Route exact path='/git' element={< Normalscreen/>}></Route>
      <Route exact path='/Companyinfo' element={< Companyinfo/>}></Route>
      <Route exact path='/signin' element={< Signin/>}></Route>
      <Route exact path='/signup' element={< Signup/>}></Route>
  
   </Routes>
   
   </HashRouter>
    )
  }else{
    return(
      <HashRouter>
    <Adminheader/>
     <Routes>
     <Route exact path='/Dashboard' element={< Dashboard/>}></Route>
     <Route exact path='/Createcompany' element={< Createcompany/>}></Route>
      <Route exact path='/companylist' element={< Companylist/>}></Route>
      <Route exact path='/:id/editcomp' element={< Edit/>}></Route>
   </Routes>
   
   </HashRouter>
    )
  }
}

export default App;
