import React, { Component } from 'react';
import Carousel from './carousel';
import IconBox from './iconBox';
import Item1 from './item_1';

const optArray = ['ALL', "WOMAN'S", "MEN'S"];

class Body extends Component {
    render() {
        return(
            <div>
                <Carousel />
                <IconBox />
                <Item1 headTitle='New Arrivals' optArray={optArray}/>
            </div>
        )
    }
}

export default Body