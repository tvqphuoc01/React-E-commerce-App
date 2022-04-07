import React, { Component } from 'react';

const largeContent = ["FREE SHIPPING", "FREE RETURNS", "GET 20% OFF 1 ITEM", "WE SUPPORT"];
const miniContent = ["Order 50$ or More", "Within 30 days", "When you Sign Up", "24/7 Amazing services"];
const iconContent = ["fa-solid fa-rocket text-4xl px-4", "fas fa-redo text-4xl px-4", "fa-solid fa-circle-info text-4xl px-4", "fas fa-headset text-4xl px-4"];
class IconBox extends Component {
    render() {
        return(
            <div className='md:grid md:grid-cols-4 md:gap-4 xl:max-w-screen-xl md:max-w-screen-md sm:flex m-auto'>
                {
                    largeContent.map((item, index) => (
                        <div className='flex py-8 items-center justify-center content-between' key={index}>
                            <i className={iconContent[index] + ' text-[#445f84]'}></i>
                            <div>
                                <h1>{item}</h1>
                                <h4>{miniContent[index]}</h4>
                            </div>
                        </div>   
                    ))
                }
            </div>
        )
    }
}

export default IconBox;