import React, { useState, useEffect } from 'react';
import { Layout, Row, Divider } from 'antd';
import ProductCard from '../component/productCard';
import Header from '../component/header';
import Footer from '../component/footer';
import Filter from '../component/filter';
import BackToTop from '../component/backTop';
import axios from 'axios';
import { notification } from 'antd';
import { useLocation } from "react-router-dom";

const { Content } = Layout;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ProductPage = () => {
  const [data, setData] = useState([]); // default value
  const [productCount, setProductCount] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const [brandData, setBrandData] = useState({});
  const query = useQuery();
  const brandId = query.get("brandId");

  function getData() {
    axios.get(`http://localhost:9000/product?brandId=${brandId}`).then((res) => {
      setData(res.data.productData);
      setDisplayData(res.data.productData);
      setBrandData(res.data.brand[0]);
    });
  }
  
  function updateProductsDisplayByColor(color) {
    setDisplayData(data);
    let newData = [];
    data.map((item) => {
      if(item.availableColor[color] !== 0) {
        newData.push(item);
      }
    });
    setDisplayData(newData);
  }

  function updateProductsDisplayBySize(size) {
    setDisplayData(data);
    let newData = [];
    displayData.map((item) => {
      if(item.availableSize[size] !== 0) {
        newData.push(item);
      }
    });
    setDisplayData(newData);
  }

  notification.config({});

  const openNotification = (data) => {
    notification.open({
      message: 'Add Item Successful',
      description: data.productName + ' added to your Cart',
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
      let newProduct = {
        _id: data._id,
        productName: data.productName,
        Qty: 1,
        price: data.price,
        image: data.image
      }
      resetLocalStored.push(newProduct);
    }
    localStorage.setItem('localCart', JSON.stringify(resetLocalStored));
    setProductCount(resetLocalStored.length);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div>
          <Header />
          <BackToTop />
          <Layout style={{ padding: '24px 0' }}>
            <div className='md:flex'>
              <Filter dataLength={data.length} colorFilterFunction={updateProductsDisplayByColor} sizeFilterFunction={updateProductsDisplayBySize}/>
              <Content className='site-layout-background px-10 py-10'>
                  <div className='lg:grid lg:grid-cols-12 w-full sm:flex'>
                      <div className='bg-white rounded-xl border ml-10 px-5 lg:col-span-4'>
                          <Divider orientation='left'>{brandData.brandName}</Divider>
                          <div className='lg:flex pb-5'>
                              <img src={brandData.image} className='border-solid max-w-2xl rounded-xl border max-h-32 mx-5'></img>
                              <p>
                                  {brandData.info}
                              </p>
                          </div>
                      </div>
                      <div className='bg-white rounded-xl border ml-10 px-5 lg:col-span-8 sm:col-span-12'>
                          <div className='pt-5'>
                            <h1 className='text-4xl text-center m-0'>Men's Shoes({data.length})</h1>
                          </div>
                          <div className='flex items-center justify-center pt-5 pb-5'>
                            <div className='flex items-center'>
                              <i className="fa-solid fa-arrow-down-short-wide text-2xl"></i>
                              <h1 className='text-2xl m-0'>SORT BY</h1> 
                            </div>
                            <div>
                              <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines"/>
                                <span class="ml-2">Newest</span>
                              </label>    
                              <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Price: Low - High</span>
                              </label>
                              <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio" name="accountType" value="busines"/>
                                <span class="ml-2">Price: High - Low</span>
                              </label>         
                            </div>
                          </div>
                          <div className="items-center pb-5">
                            <div className="flex justify-center items-center">
                                <div className="relative items-center"> <input type="text" className="h-12 sm:48 md:52 lg:w-72 pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none italic bg-slate-300" placeholder="Search Men's Product..." />
                                    <div className="absolute top-4 right-3"> <i className="fa-solid fa-magnifying-glass z-20 hover:text-gray-500 text-sky-800"></i> </div>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <center>
                      <Row justify='start' gutter={[40, 16]} className='products-row px-10 py-10'>
                        { displayData.map((elem) => {
                            return (
                              <ProductCard
                                  data={elem}
                                  key={elem._id}
                                  itemId={elem._id}
                                  itemName={elem.productName}
                                  itemDescription={elem.info}
                                  itemImage={elem.image}
                                  itemPrice={elem.price}
                                  addProduct={addProduct}
                              />
                            );
                        })}
                      </Row>
                  </center>
              </Content>
            </div> 
        </Layout>
        <Footer />
      </div>
    );
};

export default ProductPage;