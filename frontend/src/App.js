import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Cart from './components/Nav/Cart/cart'
import DetailRoute from './components/Products/productDetail'
import Signup from './components/Signup/Signup'
import Login from './components/login/Login'
import { Routes, Route } from "react-router-dom";
import Account from './components/Account/Account';
import NotFound from './components/Notfound/Notfound';



function App() {

  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/products" element={<Landing />} />

    <Route path="/products/:productId" element={<DetailRoute/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/account" element={<Account/>} />
    <Route path="*" element={<NotFound/>} />


    </Routes>

     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
