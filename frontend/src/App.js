import './App.css';
import Nav from './components/Nav/nav'
import Carousel from './carousel/carousel'
import Products from './components/Products/products'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom';

function App() {
  const slides =[
    'https://i.pinimg.com/736x/7b/f0/e8/7bf0e8b5b646f4d4d2263c86f0a648b2.jpg',
    'https://i.pinimg.com/736x/7b/f0/e8/7bf0e8b5b646f4d4d2263c86f0a648b2.jpg'
  ]



  return (
    <div className="App">
      <Nav/>
     <Carousel slides={slides}/>
     <Products />
     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
