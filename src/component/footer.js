import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div>
                <div className='relative hidden lg:block h-48'>
                    <img className='object-fill h-full w-full' src='bg-2.jpg'/>
                    <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full'>
                        <h1 className='text-4xl text-white font-black ml-3 text-center'>Subscribe for Our Newsletter</h1>
                        <h5 className='text-2xl text-white font-normal ml-3 text-center pb-5'>and receive $20 coupon for first shopping</h5>
                        <div className="items-center pb-5">
                            <div className="flex justify-center items-center">
                                <div className="relative grid justify-items-center items-center w-full"> 
                                    <input type="text" className="h-12 pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none italic bg-white w-1/5" placeholder="Enter Your Email Address..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-auto relative flex content-center justify-center items-center justify-items-center lg:hidden'>
                    <img className='object-fill h-full w-full' src='banner-2.jpg'/>
                    <div className='absolute inset-x-0 bottom-0 min-h-1/3 min-w-full'>
                        <h1 className='text-4xl text-white font-black ml-3 text-center'>Subscribe for Our Newsletter</h1>
                        <h5 className='text-2xl text-white font-normal ml-3 text-center pb-5'>and receive $20 coupon for first shopping</h5>
                        <div className="items-center pb-5">
                            <div className="flex justify-center items-center">
                                <div className="relative grid justify-items-center items-center w-full"> 
                                    <input type="text" className="h-12 pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none italic bg-white w-4/5" placeholder="Enter Your Email Address..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#333333] flex'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 w-4/5 m-auto'>
                        <div>
                            <a href="/">
                                <img className='my-4' src='logo-footer.png'/>
                            </a>
                            <h3 className='my-4 text-[#777777] font-thin text-lg font-normal'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</h3>
                            <div className='flex'>
                                <a href="#">
                                    <div className='border rounded-full border-white hover:cursor-pointer hover:border-[#4a5e86] transition duration-500 ease-in-out mx-4 my-4'>
                                        <i class="fab fa-facebook-f text-2xl text-[#777777] hover:text-white transition duration-500 ease-in-out px-4 py-2"></i>
                                    </div> 
                                </a>
                                <a href="#">
                                    <div className='border rounded-full border-white hover:cursor-pointer hover:border-[#4a5e86] transition duration-500 ease-in-out mx-4 my-4'>
                                        <i class="fab fa-twitter text-2xl text-[#777777] hover:text-white transition duration-500 ease-in-out px-3 py-2"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className='border rounded-full border-white hover:cursor-pointer hover:border-[#4a5e86] transition duration-500 ease-in-out mx-4 my-4'>
                                        <i class="fab fa-instagram text-2xl text-[#777777] hover:text-white transition duration-500 ease-in-out px-3.5 py-2"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className='border rounded-full border-white hover:cursor-pointer hover:border-[#4a5e86] transition duration-500 ease-in-out mx-4 my-4'>
                                        <i class="fab fa-youtube text-2xl text-[#777777] hover:text-white transition duration-500 ease-in-out px-3 py-2"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl text-white pt-4'>Useful Links</h1>
                            <ul>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>About Molla</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>How to shop on Molla</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>FAQ</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Contact us</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Log in</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                        <h1 className='text-2xl text-white pt-4'>Customer Service</h1>
                            <ul>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Payment Methods</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Money-back guarantee!</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Returns</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Shipping</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Terms and conditions</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Privacy Policy</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl text-white pt-4'>My Account</h1>
                            <ul>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Sign In</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>View Cart</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>My Wishlist</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Track My Order</li>
                                </a>
                                <a href='#'>
                                    <li className='leading-loose text-[#777777] text-lg hover:text-[#4a5e86] transition duration-500 ease-in-out'>Help</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-[#333333] flex'>
                    <div className='lg:flex lg:justify-between w-4/5 m-auto pb-10'>
                        <h1 className='text-[#777777] font-thin text-lg font-normal text-center'>Copyright © 2022 by Phuoc Tran. All Rights Reserved.</h1>
                        <div className='sm:flex sm:justify-center'>
                            <img src='payments.png' style={{height: "20px"}}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;