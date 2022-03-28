import '../App.css';
import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import RegisterForm from '../component/registerForm';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='m-auto flex justify-center mx-20 my-20'>
          <div className='hidden md:block'>
            <img src='banner-3.jpg'/>
          </div>
          <div className='flex justify-center mx-10'>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Register" key="1">
                <RegisterForm />
              </TabPane>
            </Tabs>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Register