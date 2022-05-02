import React, { useState, useEffect }from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import BackToTop from '../component/backTop';
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

const CartPage = (props) => {
    const [data, setData] = useState([]); // default value

    function deleteItem(itemId) {
      let localCartData = [...JSON.parse(localStorage.getItem('localCart'))];
      let index = localCartData.findIndex(object => ((object._id === itemId)));
      localCartData.splice(index, 1);
      localStorage.setItem('localCart', JSON.stringify(localCartData));
      setData(localCartData);
    }

    function deleteAllItem() {
      let localCartData = [];
      localStorage.setItem('localCart', JSON.stringify(localCartData));
      setData(localCartData);
    }

    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        key: 'itemId',
      },
      {
        title: 'Image',
        dataIndex: 'image',
        width: 150,
        maxWidth: 150,
        render: (t, r) => <img src={`${r.image}`} />,
        key: 'itemImage',

      },
      {
        title: 'Name',
        dataIndex: 'productName',
        key: 'itemName',
      },
  
      {
        title: 'Qty',
        key: 'Quantity',
        dataIndex: 'Qty',
      },
      {
        title: 'Price',
        key: 'itemPrice',
        dataIndex: 'price',
      },
      {
        title: '',
        width: 50,
        maxWidth: 50,
        render: (t,r) =>  <Button type='default' onClick={() => deleteItem(r._id)} danger>
                            <DeleteOutlined />
                          </Button>,
        key: 'deleteItem',
      }
    ];

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('localCart'));
        if (data) {
            setData(data);
        }
    }, []);
  
    return (
      <div>
        <Header />
        <BackToTop />
        <div className='flex m-auto justify-center'>
            <div className='px-10 py-10'>
                <Layout>
                    <Content className='site-layout-background px-10 py-10'>
                    <Breadcrumb>Cart</Breadcrumb>
                    <br></br>
                    <Row justify='end'>
                        <Col>
                        <Button type='default' onClick={deleteAllItem} danger>
                            <DeleteOutlined />
                            &nbsp;
                            <span>Delete Cart</span>
                        </Button>
                        </Col>
                    </Row>
                    <h2>
                        Total Items <strong>({data.length})</strong>
                    </h2>
                    <br></br>
                    <Table columns={columns} dataSource={data} pagination={false} />
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
                            value={data.reduce((partialSum, element) => partialSum + parseInt(element.price.split('$')[1]) * parseInt(element.Qty), 0) + '$'}
                        />
                        <Button style={{ marginTop: 16 }} type='primary'>
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
  
export default CartPage;