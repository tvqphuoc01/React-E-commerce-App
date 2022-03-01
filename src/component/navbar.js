import React, {Component} from 'react';
import NavbarListItem from './navbarListItem';
class Navbar extends Component {
    render() {
        return(
            <div className='flex'>
                <div className='flex min-w-1/2 mr-auto ml-auto'>
                    <div className='items-center'>
                        <img className='mt-3 mb-3' src='/logo.png' width={105} height={27}/>
                    </div>
                    <div className='pl-14'>
                        <div>
                            <ul className="grid grid-cols-4 h-14 gap-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm content-center">
                                <li>
                                    <a href="#" className="block mx-3 my-3 pl-3 pr-3 inline-flex items-center h-14">HOME</a>
                                </li>
                                <li id="dropdownButton" data-dropdown-toggle="dropdown">
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="block mx-3 my-3 pl-3 pr-3 inline-flex items-center h-14">MEN <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                    <div id="dropdownNavbar" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="dropdownButton2" data-dropdown-toggle="dropdown">
                                    <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar" className="block mx-3 my-3 pl-3 pr-3 inline-flex items-center h-14">WOMAN <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                    <div id="dropdownNavbar2" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">25%</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">50%</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">75%</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="block mx-3 my-3 pl-3 pr-3 inline-flex items-center h-14">PAGES</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center">
                        <div className="flex justify-center items-center">
                            <div className="relative items-center"> <input type="text" className="h-12 pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none italic bg-slate-300" placeholder="Search Product..." />
                                <div className="absolute top-4 right-3"> <i className="fa fa-search font-thin z-20 hover:text-gray-500 text-sky-800"></i> </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center h-12 pr-3 pl-5">
                            <div className="relative items-center">
                                <i className="fal fa-cart-plus text-2xl font-thin z-20 hover:text-gray-500 text-sky-800"></i>
                            </div>
                        </div>
                        <span className="rounded-full bg-[#445f84] p-1 pr-2 pl-2 text-white font-mono text-sm  leading-tight text-center">5</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar