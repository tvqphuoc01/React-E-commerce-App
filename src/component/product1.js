import React, { Component } from 'react';
import { Card } from 'antd';
import { getKeyThenIncreaseKey } from 'antd/lib/message';

const { Meta } = Card;

class Product1 extends Component {
    render() {
        return(
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={this.props.productImage} />}
                >
                    <h3>{this.props.productName}</h3>
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add to Cart</button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Product1;