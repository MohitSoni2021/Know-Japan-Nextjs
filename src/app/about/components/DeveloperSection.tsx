"use client"

import Link from 'next/link';
import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const DeveloperSectionAboutPage = () => {
    return (
        <>
            <div className='w-full p-3 flex items-center justify-center my-5'>
                <div className="CardOuterContainer w-fit bg-white border-2 border-gray-300 rounded-md p-3 max-w-[300px] relative my-5 mx-4 h-full">
                    <div className="rounded-full aspect-square max-w-[100px] absolute -top-10
             -left-10 overflow-hidden">
                        <img src="https://thumbs.dreamstime.com/z/hacker-looking-camera-face-mask-dark-theme-wallpaper-hacker-looking-camera-face-mask-dark-theme-wallpaper-291465611.jpg?ct=jpeg" alt="" className='max-w-[100px] aspect-square rounded-full border-2 border-gray-300' />
                    </div>
                    <h1 className='mt-[50px] text-center font-bold text-2xl text-wrap mb-3'>Mohit Soni</h1>
                    <p >
                        This is a simple web application . <br />
                        Display some data about japan and it's Japanese culture

                    </p>
                    <div className="links py-3 flex items-center justify-center gap-4">
                        <Link href={"https://github.com/MohitSoni2021"}>
                            <FaSquareGithub className='text-4xl' />
                        </Link>
                        <Link href={"https://github.com/MohitSoni2021"}>
                            <FaInstagramSquare className='text-4xl' />
                        </Link>
                        <Link href={"https://github.com/MohitSoni2021"}>
                            <FaYoutube className='text-4xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeveloperSectionAboutPage