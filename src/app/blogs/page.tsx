"use client"
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import React, { Suspense, useEffect } from 'react'
import axios from 'axios'
import LoaderComponenet from '../../components/loader'
import BlogDisplayCard from './components/BlogCard'




const BlogMainPage = () => {
    const [BlogsPosts, setBlogsPosts] = React.useState();

    const GetBlogPosts = async () => {
        const ServerResponse = await axios.get(`http://${document.location.host}/api/blogs`)
        console.log(ServerResponse.data.data)
        setBlogsPosts(ServerResponse.data.data.map((ele: any, i: number) => {
            return (
                <BlogDisplayCard blogHeading={ele.title} blogBody={ele.body} blogDate={ele.date} key={ele.id} id={ele.id} />
            )
        }))
    }

    useEffect(() => {
        GetBlogPosts()
    }, [])

    return (
        <>
            
            <Suspense fallback={<LoaderComponenet/>}>
                <div className='w-full overflow-x-hidden'>
                    <div className='bg-gray-200 flex gap-1 p-1'>
                        <Link href="/blogs/editor">
                            <span className="shadow-sm text-sm font-bold p-1">Editor</span>
                        </Link>
                    </div>
                    <h1 className='w-full text-center text-4xl py-3 font-bold'>
                        Blogs
                    </h1>
                    <br />
                    <Suspense fallback={<LoaderComponenet/>}>
                        {
                            BlogsPosts ? BlogsPosts: <LoaderComponenet/>
                        }
                    </Suspense>
                </div>
            </Suspense>
        </>
    )
}

export default BlogMainPage