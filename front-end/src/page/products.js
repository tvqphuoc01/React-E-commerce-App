import React, { useState, useEffect } from 'react';
import { Layout, Row, Divider } from 'antd';
import ProductCard from '../component/productCard';
import Header from '../component/header';
import Footer from '../component/footer';
import Filter from '../component/filter';
import BackToTop from '../component/backTop';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const { Content } = Layout;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ProductPage = () => {
  const [data, setData] = useState([]); // default value

  const query = useQuery();
  const brandId = query.get("brandId");
  function getData() {
    axios.get(`http://localhost:9000/product?brandId=${brandId}`).then((res) => {
      setData(res.data);
    });
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
              <Filter />
              <Content className='site-layout-background px-10 py-10'>
                  <div className='lg:grid lg:grid-cols-12 w-full sm:flex'>
                      <div className='bg-white rounded-xl border ml-10 px-5 lg:col-span-4'>
                          <Divider orientation='left'>NIKE</Divider>
                          <div className='lg:flex pb-5'>
                              <img src="nike.jpg" className='border-solid max-w-2xl rounded-xl border max-h-32 mx-5'></img>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting
                                  industry. Lorem Ipsum has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer took a galley of type
                                  and scrambled it to make a type specimen book.
                              </p>
                          </div>
                      </div>
                      <div className='bg-white rounded-xl border ml-10 px-5 lg:col-span-8 sm:col-span-12'>
                          <div className='pt-5'>
                            <h1 className='text-4xl text-center m-0'>Men's Shoes(405)</h1>
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
                        { data.map((elem) => {
                            return (
                              <ProductCard
                                  key={elem._id}
                                  itemName={elem.productName}
                                  itemDescription={elem.info}
                                  itemImage={elem.image}
                                  itemPrice={elem.price}
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