import './App.css';
import { Component} from 'react';
import Index from './page';
import Login from './page/login';
import CartPage from './page/cart';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App