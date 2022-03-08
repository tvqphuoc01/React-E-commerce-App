import React, { Component } from 'react';

const bannerImg = ['banner-5.jpg','banner-6.jpg','banner-7.jpg']

class Banner extends Component {
    render() {
        return(
            <div className='relative max-w-screen-xl md:m-auto md:flex py-10 px-2'>
                { 
                    this.props.optArray.map((item, index) => (
                        <div className='m-auto relative' key={index}>
                            <img src={bannerImg[index]}/>
                            <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full'>
                                <h1 className='text-4xl text-white font-black ml-3'>{item}</h1>
                                <h5 className='text-2xl text-white font-thin ml-3 '>125 Products</h5>
                                <button class="bg-white hover:bg-[#445f84] hover:text-white text-[#445f84] font-bold ml-3 mb-3 py-2 px-4 rounded-full">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}

export default Banner;