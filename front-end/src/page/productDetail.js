import React, { useState, useEffect } from 'react';
import BackToTop from '../component/backTop';
import Header from '../component/header';
import Footer from '../component/footer';
import axios from 'axios';
import DetailsThumb from '../component/detailsThumb';
import { Rate, notification } from 'antd';
import { useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  

const ProductDetail = () => {
    const [products, productSet] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const query = useQuery();
    const productId = query.get("productId");

    notification.config({});

    const openNotification = (data) => {
        console.log(data);
        notification.open({
          message: 'Add Item Successful',
          description: data.title + ' added to your Cart',
          onClick: () => {
            console.log('Notification Clicked!');
          },
          style: {
            backgroundColor: '#23c55e',
            'font-weight': '500'
          }
        });
      };
    
    function addProduct(data) {
        if(localStorage.getItem('localCart') === null) {
            localStorage.setItem('localCart', JSON.stringify([]));
        }
        let resetLocalStored = [...JSON.parse(localStorage.getItem('localCart'))];
        if(resetLocalStored.some(object => object._id === data._id)) {
            let index = resetLocalStored.findIndex(object => ((object._id === data._id)));
            openNotification(resetLocalStored[index]);
            resetLocalStored[index].Qty++;
        } else {
            openNotification(data);
            console.log(data);
            let newProduct = {
                _id: data._id,
                productName: data.title,
                Qty: 1,
                price: data.price,
                image: data.src[0]
            }
            resetLocalStored.push(newProduct);
        }
        localStorage.setItem('localCart', JSON.stringify(resetLocalStored));
        setProductCount(resetLocalStored.length);
    }    

    function updateCurrentImage(pos) {
        setCurrentImage(pos);
    }

    function getItemData() {
        axios.get(`http://localhost:9000/productData?productId=${productId}`).then((res) => {
            productSet(
                [
                  {
                    "_id": res.data.productData._id,
                    "title": res.data.productData.productName,
                    "src": [
                        res.data.productData.image,
                        "product-6-1.png",
                        "product-6-2.png"
                      ],
                    "description": res.data.productData.info,
                    "content": res.data.productData.info,
                    "price": res.data.productData.price,
                    "rate": res.data.productData.rate
                  }
                ]
            );
        });
    }

    useEffect(() => {
        getItemData();
    }, []);


    return (
        <div>
            <Header />
            <BackToTop />
            <div className="app">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[currentImage]} alt=""/>
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>{item.price}</span>
                                </div>
                                <Rate disabled defaultValue={item.rate} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <DetailsThumb images={item.src} updateCurrentImage={updateCurrentImage}/>
                                <button className="cart" onClick={() => addProduct(item)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
      );
  };
  
  export default ProductDetail;