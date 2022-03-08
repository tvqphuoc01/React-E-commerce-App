import React, { Component } from 'react';
import Carousel from './carousel';
import IconBox from './iconBox';
import Item1 from './item_1';
import Banner from './banner';
import Banner2 from './banner-2';
const optArray = ['ALL', "WOMAN'S", "MEN'S"];
const bannerArray = ["WOMMAN'S", "MEN'S", "KID'S"];
class Body extends Component {
    render() {
        return(
            <div>
                <Carousel />
                <IconBox />
                <Item1 headTitle='New Arrivals' optArray={optArray}/>
                <Banner optArray={bannerArray}/>
                <Banner2 />
            </div>
        )
    }
}

export default Body