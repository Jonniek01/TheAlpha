import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Stats from './components/stats/Stats'
import RightBar from './components/rightbar/RightBar'
import Content from './components/content/Content'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
function App() {
  const user=JSON.parse(localStorage.getItem('currentUser'))
      console.log(user);

  
  if(user!==null){
    return (
      <div className="App">
        <div className='container'>
          <Sidebar/>
          <Header name={user.username}/>
          <Stats />
          <RightBar />
          <Content/>
  
  
         </div>
      </div>
    );
  
  }
  return(
    <div className='log_sign'>
    <Nav/>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>

    </Routes>
    </div>
    
  )

  
}

export default App;
