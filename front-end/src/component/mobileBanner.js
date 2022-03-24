import React, { Component } from 'react';

class MobileBanner extends Component {
    render() {
        return(
            <div className='relative max-w-screen-xl md:m-auto md:flex py-5 px-2'>
                <div className='m-auto relative'>
                    <img src={this.props.imgMobileBanner}/>
                    <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full'>
                        <h1 className='text-4xl text-white font-black ml-3 text-center'>{this.props.content}</h1>
                        <h5 className='text-sm text-white font-thin ml-3 '>{this.props.content2}</h5>
                        <button className="bg-white hover:bg-[#445f84] hover:text-white text-[#445f84] font-bold ml-3 mb-3 py-2 px-4 rounded-full">
                            Shop Now
                        </button>
                    </div>
                </div>           
            </div>
        )
    }
}

export default MobileBanner;