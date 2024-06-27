"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { Suspense, useEffect, useRef } from 'react'
import { TextToHtml } from '../../../backend/BlogPage/blogFunctions'
import LoaderComponenet from '@/components/loader'
import { NextRequest } from 'next/server'

const BlogPostDetailPage = () => {
    const param = useParams()
    const [ResponseServer, setResponseServer] = React.useState("");
    const [PostData, setPostData] = React.useState({
        title: "Loading...",
        body: "Loading..",
        date: "Loading.."
    });
    const BlogBodyContentRef: any = useRef()

    const GetSingleData = async () => {
        const response: any = await axios.post(`http://${document.location.host}/api/blogs/single`, { blogid: param.blogid })
        setResponseServer(JSON.stringify(response.data))
        setPostData(response.data.data)
        setTimeout(() => {
            BlogBodyContentRef.current.innerHTML = TextToHtml(response.data.data.body)
        }, 100);
    }

    useEffect(() => {
        GetSingleData()
    }, [])

    return (
        <>
            {
                PostData.title == "Loading..." ? <LoaderComponenet /> :
                    <Suspense fallback={<LoaderComponenet/>}>
                        <div className='w-full flex items-center justify-center pt-3'>
                            <div className='container flex items-center justify-center flex-col mx-3 mt-2  p-3 bg-gray-100 rounded-md my-5'>
                                <div className="blogHeading text-2xl text-center font-bold py-2 mb-3 px-3  mt-2  w-full border-b-2 border-gray-500 hover:bg-gray-100">
                                    {
                                        PostData.title
                                    }
                                </div>
                                <div className="container">

                                    <div className="blogBodyContainer p-0 rounded-md mt-3 mb-1" >
                                        <p ref={BlogBodyContentRef}>
                                        </p>
                                        <br />

                                        <div className='text-gray-400 font-bold text-sm mt-5 text-end'>
                                            Posted on - {PostData.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Suspense>
            }
        </>
    )


}

export default BlogPostDetailPage