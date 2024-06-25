"use client"
import React, { memo } from 'react'
import './styles/Navbar.css'
import { useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { GiJapan } from "react-icons/gi";


const Navbar = () => {
    const NavbarRef:any = useRef()
    const toggleNav = () => {
        NavbarRef.current.classList.toggle("max-sm:hidden")
        NavbarRef.current.classList.toggle("max-sm:p-0")
        NavbarRef.current.classList.toggle("max-sm:overflow-hidden")
    }


    return (
        <>
            <nav className='w-full  p-1 flex max-sm:flex-col max-sm:text-base max-md:text-lg max-lg:text-xl text-xl z-50 shadow-sm ' >
                <div className='flex w-full px-2 z-50'>
                    <div className="siteLogo  w-full p-1 flex items-center">
                        <Link href="/" className='flex items-center'>
                            <GiJapan className='text-4xl' />
                            <span className="font-bold text-2xl">日本語</span>
                        </Link>
                    </div>
                    <div className="Hamburger-icon w-full justify-end h-full flex cursor-pointer items-center sm:hidden my-auto">
                        <button onClick={toggleNav}><GiHamburgerMenu className='p-1 rounded text-4xl font-bold text-black' /></button>
                    </div>
                </div>
                <div ref={NavbarRef} className="navoptions p-1 flex justify-end max-sm:justify-center max-sm:hidden max-sm:p-0 max-sm:m-2 max-sm:border-t-2 max-sm:rounded-none">
                    <ul className='flex gap-2 max-sm:flex-col max-sm:w-full'>

                        <Link href="/">
                        <li className=' transition-all duration-200 px-3 py-2 rounded-md cursor-pointer font-bold flex items-center gap-2 relative flex-col Rotate180'>
                            Home
                        </li>
                        </Link>


                        <Link href="/about">
                        <li className=' transition-all duration-200 px-3 py-2 rounded-md cursor-pointer font-bold flex items-center gap-2 relative flex-col Rotate180'>
                            About
                        </li>
                        </Link>

                        <li className=' transition-all duration-200 px-3 py-2 rounded-md cursor-pointer font-bold flex items-center gap-2 relative flex-col Rotate180 max-sm:w-full'>
                            <span className='flex gap-2 items-center'>
                                sections
                                <IoIosArrowDown className='dropdownArrowIcon' />
                            </span>
                            <div className='sm:absolute top-10 p-2 rounded-md DropdownOptionsList right-0 '>
                                <ul className='flex flex-col gap-2 mt-1 max-sm:w-full rounded-md p-2 bg-white max-sm:text-sm text-sm z-50 w-72'>
                                    <Link href={"/images/"}>
                                        <li className='hover:bg-blue-500 hover:text-white py-1 px-2 rounded'>Japan Images</li>
                                    </Link>
                                    <Link href={"/shorts"}>
                                        <li className='hover:bg-blue-500 hover:text-white py-1 px-2 rounded'>Shorts</li>
                                    </Link>
                                    <li className='hover:bg-blue-500 hover:text-white py-1 px-2 rounded'>Score</li>
                                    <li className='hover:bg-blue-500 hover:text-white py-1 px-2 rounded'>Content</li>
                                    <li className='hover:bg-blue-500 hover:text-white py-1 px-2 rounded'>another</li>
                                </ul>
                            </div>
                        </li>

                        <Link href="/blogs">
                        <li className=' transition-all duration-200 px-3 py-2 rounded-md cursor-pointer font-bold flex items-center gap-2 relative flex-col Rotate180'>
                            blogs
                        </li>
                        </Link>

                        <Link href="/">
                        <li className=' transition-all duration-200 px-3 py-2 rounded-md cursor-pointer font-bold flex items-center gap-2 relative flex-col bg-blue-600 text-white Rotate180'>
                            Signup
                        </li>
                        </Link>





                    </ul>
                </div>

            </nav>

        </>
    )
}

export default memo(Navbar)