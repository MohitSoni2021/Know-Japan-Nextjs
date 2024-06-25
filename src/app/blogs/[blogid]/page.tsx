"use client"
import Navbar from '../../../components/Navbar'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { TextToHtml } from '../../../backend/BlogPage/blogFunctions'
import LoaderComponenet from '@/components/loader'

const BlogPostDetailPage = () => {
    const param = useParams()
    const [PostData, setPostData] = React.useState({
        title: "Loading...",
        body: "",
        date: "Loading.."
    });
    const BlogBodyContentRef:any = useRef()

    const GetSingleData = async () => {
        const Response = await axios.post(`http://${document.location.host}/api/blogs/single`, { blogid: param.blogid })
        setPostData(Response.data.data)
        BlogBodyContentRef.current.innerHTML = TextToHtml(Response.data.data.body)
    }

    useEffect(() => {
        GetSingleData()
    }, [])

    return (
        <>
            {
                PostData.title == "Loading..." ? <div className='flex items-center justify-center flex-col mx-3 mt-2 '>
                <div className="blogHeading text-2xl text-center font-bold py-3 px-3 rounded-lg mt-2 shadow-md w-full border-2 hover:bg-gray-100">
                    {
                        PostData.title
                    }
                </div>
                <div className="container">

                    <div className="blogBodyContainer p-2 rounded-md mt-3 mb-1" >
                        <p ref={BlogBodyContentRef}>

                        </p>
                        <br />

                        <div className='text-gray-400 font-bold text-sm mt-5 text-end'>
                            Posted on - {PostData.date}
                        </div>
                    </div>
                </div>
            </div>:
            <LoaderComponenet/>
            }
        </>
    )
}

export default BlogPostDetailPage