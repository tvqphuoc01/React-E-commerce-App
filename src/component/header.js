import React, { Component } from 'react';
import HeaderList from './headerList';
import Navbar from './navbar';
import MobileNavBar from './mobileNavbar';
class Header extends Component {
    render() {
        return(
            <div>
                <div className='lg:invisible'>
                    <MobileNavBar />
                </div>
                <div className='hidden lg:block'>
                    <HeaderList />
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Header