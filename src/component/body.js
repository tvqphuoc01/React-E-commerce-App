import React, { Component } from 'react';
import Carousel from './carousel';
import IconBox from './iconBox';
class Body extends Component {
    render() {
        return(
            <div>
                <Carousel />
                <IconBox />
            </div>
        )
    }
}

export default Body