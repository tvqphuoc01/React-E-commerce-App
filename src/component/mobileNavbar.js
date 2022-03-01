import React, { Component } from "react";
import classNames from 'classnames';

class MobileNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenMenu: true,
            hiddenLink: true,
        }
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleClickLinks = this.handleClickLinks.bind(this);
    }

    handleClickMenu() {
        this.setState((state)=>({
            hiddenMenu: !state.hiddenMenu
        }));
    }

    handleClickLinks() {
        this.setState((state)=>({
            hiddenLink: !state.hiddenLink
        }));
    }

    render() {
        var linkClassNames = classNames({
            'mobile-menu': true,
            'hidden': this.state.hiddenLink
        })
        var btnClassNames = classNames({
            'mobile-menu': true,
            'hidden': this.state.hiddenMenu
        })
        return(
            <div>
                <div className="flex flex-col lg:hidden items-center min-h-full" >
                    <button className="outline-none mobile-menu-button h-14 text-gray-600 font-thin text-sm" onClick={this.handleClickLinks}>LINKS</button>
                    <div className={linkClassNames}>
                        <ul>
                            <li className="active"><a href="#" className="block text-gray-600 font-thin text-sm text-center px-2 py-4 font-semibold">CALL: +0123 456 789</a></li>
                            <li><a href="#" className="block text-gray-600 font-thin text-sm text-center px-2 py-4 transition duration-300">ABOUT US</a></li>
                            <li><a href="#" className="block text-gray-600 font-thin text-sm text-center px-2 py-4 transition duration-300">CONTACT US</a></li>
                            <li><a href="#" className="block text-gray-600 font-thin text-sm text-center px-2 py-4 transition duration-300">LOGIN</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex min-w-3/4 mr-auto ml-auto justify-between'>
                        <div className='items-center'>
                            <img className='mt-3 mb-3' src='/logo.png' width={105} height={27}/>
                        </div>
                        <div className="items-center">
                            <div className="flex justify-center items-center">
                                <div className="relative items-center"> <input type="text" className="h-10 pr-4 pl-3 rounded-full z-0 focus:shadow focus:outline-none italic bg-slate-300" placeholder="Search..." />
                                    <div className="absolute top-2 right-3"> <i className="fa fa-search font-thin z-20 hover:text-gray-500 text-sky-800"></i> </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:hidden items-center min-h-full" >
                            <button className="outline-none mobile-menu-button h-14" onClick={this.handleClickMenu}>
                                <svg className=" w-6 h-6 text-gray-500"
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                            <div className={btnClassNames}>
                                <ul>
                                    <li className="active"><a href="#" className="block text-sm text-center px-2 py-4 hover:bg-purple-900 font-semibold">HOME</a></li>
                                    <li><a href="#" className="block text-sm text-center px-2 py-4 hover:bg-purple-900 transition duration-300">MEN</a></li>
                                    <li><a href="#" className="block text-sm text-center px-2 py-4 hover:bg-purple-900 transition duration-300">WOMAN</a></li>
                                    <li><a href="#" className="block text-sm text-center px-2 py-4 hover:bg-purple-900 transition duration-300">SALES</a></li>
                                    <li>
                                        <a href="#" className="block text-sm px-2 py-4 transition duration-300">
                                            <div className="flex items-center">
                                                <div className="flex justify-center items-center h-12 pr-3 pl-5">
                                                    <div className="relative items-center">
                                                        <i className="fal fa-cart-plus text-2xl font-thin z-20 hover:text-gray-500 text-sky-800"></i>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-[#445f84] p-1 pr-2 pl-2 text-white font-mono text-sm  leading-tight text-center">5</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNavBar