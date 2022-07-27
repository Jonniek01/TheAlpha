import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Stats from './components/stats/Stats'
import RightBar from './components/rightbar/RightBar'
import Content from './components/content/Content'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import { Route, Routes } from 'react-router-dom';
function App() {
  const logged=false;
  if(logged){
    return (
      <div className="App">
        <div className='container'>
          <Sidebar/>
          <Header/>
          <Stats />
          <RightBar />
          <Content/>
  
  
         </div>
      </div>
    );
  
  }
  return(
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/sign' element={<SignUp/>}></Route>

    </Routes>
    
  )

  
}

export default App;
