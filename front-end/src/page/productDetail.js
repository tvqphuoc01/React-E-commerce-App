import React, { useState, useEffect } from 'react';
import BackToTop from '../component/backTop';
import Header from '../component/header';
import Footer from '../component/footer';
import Colors from '../component/colors';
import DetailsThumb from '../component/detailsThumb';
const ProductDetail = () => {
    const [products, productSet] = useState([]);
    useEffect(() => {
        productSet(
            [
              {
                "_id": "1",
                "title": "Nike Shoes",
                "src": [
                    "product-6.jpg",
                    "product-6-1.png",
                    "product-6-2.png"
                  ],
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
              }
            ]
        );
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
                            <img src={item.src[0]} alt=""/>
                        </div>

                        <div className="box">
                            <div className="row">
                            <h2>{item.title}</h2>
                            <span>${item.price}</span>
                            </div>
                            <Colors colors={item.colors} />

                            <p>{item.description}</p>
                            <p>{item.content}</p>

                            <DetailsThumb images={item.src} />
                            <button className="cart">Add to cart</button>

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