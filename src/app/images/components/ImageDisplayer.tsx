"use client"
import React, { useEffect, useRef } from 'react'
import ImageCard from './ImageCard'
import { IoIosClose } from "react-icons/io";
import './Image.css'
import ImagedisplayerCard from './ImageCard';



function ImageDisplayerComponent({ data }: any) {

    return (
        <>

            <div className='grid grid-cols-2 gap-3 m-3 md:grid-cols-3 lg:grid-cols-4' >
                {
                    data.map((ele: any, key: number) => {
                        return <ImagedisplayerCard img_url={ele} key={key}/>
                    })
                }
            </div>
        </>
    );
}

export default ImageDisplayerComponent;