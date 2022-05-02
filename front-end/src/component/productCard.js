import React from 'react';
import { Card, Col, Row, Button, Divider, notification } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const ProductCard = (props) => {
  return (
    <Col key={props.itemId} md={8}>
      <Card
        hoverable
        style={{ padding: 10 }}
        cover={
          <img
            height='320px'
            width='280px'
            alt='example'
            src={props.itemImage}
          />
        }
      >
        <Card.Meta
          title={<h2>{props.itemName}</h2>}
          description={props.itemDescription}
        />
        <br></br>
        <Divider orientation='center'>Price</Divider>
        <p
          style={{
            lineHeight: '28px',
            fontWeight: 'lighter',
            fontSize: '46px',
            color: '#2ecc71',
            textAlign: 'center',
          }}
        >
          {props.itemPrice}
        </p>
        <Row gutter={[10]} className='add-cart-btn-row'>
          <Col>
            <Button
              title='Add item to cart'
              disabled={
                props.cart
                  ? props.cart.filter((elem) => elem.itemId === props.itemId)
                      .length
                  : false
              }
              onClick={() => props.addProduct(props.data)}
              type='primary'
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProductCard;