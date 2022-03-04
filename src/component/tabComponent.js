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
                    this.props.optProducts.map((item, index) => (
                        <TabPane tab={item} key={index}>
                            <div className='flex'>
                                {
                                    this.props.products.map((item, index) => (
                                        <div className='px-4'>
                                            <Product1 productName={item} key={index} productImage={this.props.productImage[index]}/>
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