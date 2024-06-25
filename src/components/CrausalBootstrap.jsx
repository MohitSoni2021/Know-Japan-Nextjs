"use client"

import React, { useRef } from 'react';
import './styles/Carousal.css'
import { FaChevronCircleLeft } from "react-icons/fa";


export function Card(props) {
    return (

        <div className='rounded-md w-full min-w-full'>
            <div className='bg-blue-500 md:mx-12 rounded-lg'>
                <img src={props.url} alt="" className='w-full aspect-video rounded-lg' />
            </div>
        </div>
    );
}


function Carousel(props) {
    const scrollContainerRef = useRef()

    const ScrollHandler = (e) => {
        if (e.target.classList.length == 0) {
            if ([...e.target.parentNode.classList].includes("rightIconBtn")) {
                scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth
            } else {
                scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth
            }
        } else {
            if ([...e.target.classList].includes("rightIconBtn")) {
                scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth
            } else {
                scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth
            }
        }
    }

    return (
        <>
            <div className='relative lg:h-screen overflow-hidden flex items-center' id='ImageScroller'>
                <FaChevronCircleLeft className='text-4xl cursor-pointer absolute top-0 h-full left-0 bg-transparent text-black leftIconBtn opacity-25  active:opacity-100' onClick={ScrollHandler} />
                <div className="outerCarousel w-full p-5 overflow-x-scroll flex gap-5 scroll-smooth scrollContainer " ref={scrollContainerRef}>
                    
                    {
                        props.carouselItems
                    }
                    
                </div>
                <FaChevronCircleLeft className='text-4xl cursor-pointer absolute top-0 h-full right-0 rotate-180 bg-transparent text-black rightIconBtn opacity-25 active:opacity-100' onClick={ScrollHandler} />
            </div>
        </>
    )
}




export default Carousel;