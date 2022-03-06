import React, { Component } from 'react';
import { Card } from 'antd';

class Product1 extends Component {
    render() {
        return(
            <div>
                <Card
                    hoverable
                    style={{ width: 240, height: 380}}
                    cover={<img alt="example" src={this.props.productImage} />}
                >
                    <div className='absolute top-60 right-5 left-5'>
                        <h3>{this.props.productName}</h3>
                        <div className='flex justify-center pt-10'>
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