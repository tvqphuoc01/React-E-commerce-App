import React, { Component } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Table,
  Space,
  Divider,
  Statistic,
  Button,
} from 'antd';
import { CreditCardOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content } = Layout;
class CartPage extends Component {
    constructor() {
        super();
        this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
        this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
    }

    mapStateToProps = (state) => ({
        cart: state.cart,
      });
      
    mapDispatchToProps = (dispatch) => ({
        removeCart: () => dispatch({ type: 'DELETE_CART' }),
    });

    render() {
        const columns = [
            {
              title: 'Id',
              dataIndex: 'itemId',
              key: 'itemId',
              render: (text) => <span>{text}</span>,
            },
            {
              title: 'Name',
              dataIndex: 'itemName',
              key: 'itemName',
            },
        
            {
              title: 'Price',
              key: 'itemPrice',
              dataIndex: 'itemPrice',
              render: (text, record) => (
                <Space size='middle'>
                  <p>{text}</p>
                </Space>
              ),
            },
          ];
        
          const total = [0];
          // this.props.cart.forEach((elem) => total.push(+elem.itemPrice.replace('$', '')));
        
          return (
            <div>
                <Header />
                <div className='flex m-auto justify-center'>
                    <div className='px-10 py-10'>
                        <Layout>
                            <Content className='site-layout-background px-10 py-10'>
                            <Breadcrumb>Cart</Breadcrumb>
                            <br></br>
                            <Row justify='end'>
                                <Col>
                                <Button type="danger" onClick={this.props.removeCart}>
                                    <DeleteOutlined />
                                    &nbsp;
                                    <span>Delete Cart</span>
                                </Button>
                                </Col>
                            </Row>
                            <h2>
                                Total Items <strong>(5)</strong>
                            </h2>
                            <br></br>
                            <Table columns={columns} dataSource={this.props.cart} pagination={false} />
                            <Divider orientation='right'>
                                <p>Billing</p>
                            </Divider>
                            <Row justify='start'>
                                <Col md={12}>
                                <Divider orientation='left'>Policy</Divider>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                                <Divider orientation='left'>Terms</Divider>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                                </Col>
                            </Row>
                            <br></br>
                            <Row justify='end'>
                                <Col>
                                <Statistic
                                    title='Total (tax incl).'
                                    value={`$ ${Math.round(
                                    total.reduce((total, num) => total + num)
                                    ).toFixed(2)}`}
                                    precision={2}
                                />
                                <Button style={{ marginTop: 16, 'background-color':'#445f84', color:'white'}}>
                                    Pay now <CreditCardOutlined />
                                </Button>
                                </Col>
                            </Row>
                            </Content>
                        </Layout>
                    </div>
                </div>
                <Footer />
            </div>
          );
    };
}

export default CartPage;