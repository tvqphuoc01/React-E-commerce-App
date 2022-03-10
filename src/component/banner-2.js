import React, { Component } from 'react';
import Banner from './banner';
class Banner2 extends Component {
    render() {
        return(
            <div className='relative max-w-screen-xl md:m-auto md:flex py-10 px-2 bg-cover banner-bg'>
                <div className='relative m-auto'>
                    <img className='rounded-lg' src={this.props.imgBanner}/>
                    <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full flex'>
                        <div>
                            <h1 className='lg:text-4xl md:text-2xl text-[#445f84] font-black ml-3 md:mb-0 lg:mb-4'>{this.props.content}</h1>
                            <h5 className='text-base font-semibold text-[#445f84] font-thin ml-3'>{this.props.content2}</h5>
                        </div>
                        <div className='flex items-center'>
                            <button class="bg-white hover:bg-[#445f84] hover:text-white text-[#445f84] font-bold lg:ml-3 lg:mb-3 lg:py-2 lg:px-4 md:ml-2 md:mb-2 md:py-1 md:px-2 rounded-full">
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