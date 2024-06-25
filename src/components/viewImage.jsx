"use client"

import React, { useRef } from 'react'
import './styles/viewImages.css'


const ImageCard = (props)=>{
    return(
        <div onClick={props.eventMention} className='transition-all duration-300 aspect-video'>
            <img key={props.unique} className='rounded-lg aspect-video w-full h-full transition-all duration-300' src={props.url} alt={props.unique} />
        </div>
    )
}



const ViewImageViewer = (props) => {
    const ImageContainerRef = useRef()

    const a = props.ImageUrls

    const handler = (e)=>{
        let allElements = [... ImageContainerRef.current.childNodes]
        allElements.filter((ele, index)=>{
            return(index != e.target.alt)
        }).forEach((ele)=>{
            ele.classList.remove("col-span-2")
            ele.classList.remove("lg:col-span-4")
        })
        e.target.parentNode.classList.toggle("col-span-2")
        e.target.parentNode.classList.toggle("lg:col-span-4")
    }

  return (
    <>
        <div>
            <div className=' grid gap-2 lg:gap-5 grid-cols-2 p-2 lg:p-5 lg:grid-cols-4  transition-all duration-300' ref={ImageContainerRef}>
                {
                    a.map((ele, index)=>{
                        return(
                            <ImageCard eventMention={handler} key={index} url={ele} unique={index}/>
                        )
                    })
                }
            </div>
        </div>    
    </>
  )
}

export default ViewImageViewer