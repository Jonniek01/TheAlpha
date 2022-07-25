import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import DetailRoute from './components/Products/productDetail'
import store from './redux/store/productStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/:productId" element={<DetailRoute/>} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
