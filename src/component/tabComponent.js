import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Component } from 'react';
import Product1 from './product1';

const { TabPane } = Tabs;

class TabDesign extends Component {
    render() {
        return(
            <Tabs defaultActiveKey="1" style={{'alignItems': 'center', paddingBottom: '10px'}}>
                {
                    this.props.optProducts.map((optItem, index) => (
                        <TabPane tab={optItem} key={index}>
                            <div className='lg:flex md:grid md:grid-cols-2'>
                                {
                                    this.props.products.slice(index * 4, index * 4 + 4).map((item, imgIndex) => (
                                        <div className='px-4 py-4'>
                                            <Product1 productName={item} key={optItem + index} productImage={this.props.productImage.slice(index * 4, index * 4 + 4)[imgIndex]}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPane>
                    ))
                }
            </Tabs>
        )
    }
}

export default TabDesign