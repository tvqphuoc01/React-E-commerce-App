import { getKeyThenIncreaseKey } from 'antd/lib/message';
import React, { Component } from 'react';
import TabDesign from './tabComponent';

const productImage = [
    './product-1.jpg', './product-2.jpg', './product-3.jpg', './product-4.jpg', 
    './product-5.jpg', './product-6.jpg', './product-7.jpg', './product-8.jpg',
    './product-1.jpg', './product-2.jpg', './product-6.jpg', './product-9.jpg',
];
const productName = [
    'The North Face Back-Berkeley', 'Nike Air Zoom Wildhorse 4', 'Eric Michael Joan', 'Nike Air Max Motion Racer', 
    'Eric Michael Sandra', 'Nike Air Force 1', 'Jessica Simpson Lucina', 'Eric Michael Joan',
    'The North Face Back-Berkeley', 'Nike Air Zoom Wildhorse 4', 'Nike Air Force 1', 'Paul George 2'
];
class Item1 extends Component {
    render() {
        return(
            <div className='items-center bg-slate-100 pb-10'>
                <div className='m-auto'>
                    <h1 className='flex justify-center text-2xl font-medium pt-8'>{this.props.headTitle}</h1>
                    <div className='flex justify-center'>
                        <TabDesign optProducts={this.props.optArray} products={productName} productImage={productImage}/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Item1;