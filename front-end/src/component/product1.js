import React, { Component } from 'react';
import { Card } from 'antd';
import { Rate } from 'antd';

class Product1 extends Component {
    render() {
        return(
            <div>
                <Card
                    hoverable
                    style={{ width: 240, height: 430}}
                    cover={<img alt="example" src={this.props.productImage} />}
                >
                    <div className='absolute top-60 right-5 left-5'>
                        <h3>{this.props.productName}</h3>
                        <div className='flex justify-center'>
                            <h3 className='text-lg font-medium text-red-600'>{'PRICE: ' + this.props.productPrice + '$'}</h3>
                        </div>
                        <div className='flex justify-center'>
                            <Rate disabled defaultValue={this.props.productRate} />
                        </div>
                        <div className='flex justify-center pt-5'>
                            <a href='#'>
                                <button className='bg-[#445f84] text-white font-bold py-2 px-4 rounded'> ADD TO CART </button>
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Product1;