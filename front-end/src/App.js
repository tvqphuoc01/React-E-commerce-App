import './App.css';
import { Component } from 'react';
import Index from './page';
import Login from './page/login';
import CartPage from './page/cart';
import ProductPage from './page/products';
import Register from './page/register';
import ProductDetail from './page/productDetail';
import NotFound from './page/404';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Index />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
          <Route path='/productDetail' element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App