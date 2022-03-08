import React, { Component } from 'react';
import Banner from './banner';
class Banner2 extends Component {
    render() {
        return(
            <div className='relative max-w-screen-xl md:m-auto md:flex py-10 px-2 bg-cover banner-bg'>
                <div className='relative m-auto'>
                    <img className='rounded-lg' src='bg-1.jpg'/>
                    <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full flex'>
                        <div>
                            <h1 className='text-4xl text-[#445f84] font-black ml-3'>New Deal Start at 12 PM</h1>
                            <h5 className='text-2xl text-[#445f84] font-thin ml-3 '>125 Products</h5>
                        </div>
                        <div>
                            <button class="bg-white hover:bg-[#445f84] hover:text-white text-[#445f84] font-bold ml-3 mb-3 mt-12 py-2 px-4 rounded-full">
                                ADD TO CART FOR 60$/YR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner2;