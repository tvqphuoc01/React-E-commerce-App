import '../App.css';
import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import LoginForm from '../component/loginForm';
import RegisterForm from '../component/registerForm';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='m-auto flex justify-center mx-20 my-20'>
          <div className='hidden md:block'>
            <img src='banner-4.jpg'/>
          </div>
          <div className='flex justify-center mx-10'>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sign In" key="1">
                <LoginForm />
              </TabPane>
              <TabPane tab="Register" key="2">
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

export default Login