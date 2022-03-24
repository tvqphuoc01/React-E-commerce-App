import React, { Component } from 'react';
import Carousel from './carousel';
import IconBox from './iconBox';
import Item1 from './item_1';
import Banner from './banner';
import Banner2 from './banner-2';
import MobileBanner from './mobileBanner';
import BackToTop from './backTop';
const optArray = ['ALL', "WOMAN'S", "MEN'S"];
const bannerArray = ["WOMMAN'S", "MEN'S", "KID'S"];
class Body extends Component {
    render() {
        return(
            <div>
                <BackToTop />
                <Carousel />
                <IconBox />
                <Item1 headTitle='New Arrivals' optArray={optArray}/>
                <Banner optArray={bannerArray}/>
                <Item1 headTitle='Top Selling Products' optArray={optArray}/>
                <div className='md:hidden'>
                    <MobileBanner imgMobileBanner='banner-1.jpg' content='New Deal Start at 12 PM' content2='Get FREE SHIPPING* & 5% rewards on every order with Molla Theme rewards program'/>
                </div>
                <div className='hidden md:block'>
                    <Banner2 imgBanner='bg-1.jpg' content='New Deal Start at 12 PM' content2='Get FREE SHIPPING* & 5% rewards on every order with Molla Theme rewards program'/>
                </div>
            </div>
        )
    }
}

export default Body