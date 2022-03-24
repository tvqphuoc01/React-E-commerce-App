import '../App.css';
import React, { Component } from 'react';
import Footer from '../component/footer';
import Body from '../component/body';
import Header from '../component/header';

class Index extends Component {
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

export default Index