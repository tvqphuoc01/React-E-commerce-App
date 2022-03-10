import './App.css';
import Header from '../src/component/header';
import Body from './component/body';
import { Component} from 'react';
import Footer from './component/footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App