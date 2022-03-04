import { getKeyThenIncreaseKey } from 'antd/lib/message';
import React, { Component } from 'react';
import TabDesign from './tabComponent';

const productImage = ['./product-1.jpg', './product-2.jpg', './product-3.jpg', './product-4.jpg'];
const productName = ['The North Face Back-Berkeley Remtlz Mesh', 'Nike Air Zoom Wildhorse 4', 'Eric Michael Joan', 'Nike Air Max Motion Racer'];
class Item1 extends Component {
    render() {
        return(
            <div className='xl:max-w-screen-xl md:max-w-screen-md m-auto items-center'>
                <h1 className='flex justify-center text-2xl font-medium'>{this.props.headTitle}</h1>
                <div className='flex justify-center'>
                    <TabDesign optProducts={this.props.optArray} products={productName} productImage={productImage}/>
                </div>
                
            </div>
        )
    }
}

export default Item1;