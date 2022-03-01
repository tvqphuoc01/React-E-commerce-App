import './App.css';
import Header from '../src/component/header';
import Body from './component/body';
import { Component} from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default App