"use client"
import Navbar from '@/components/Navbar'
import React, { useRef } from 'react'
import './page.css'
import { TextToHtml } from '../../../backend/BlogPage/blogFunctions'
import axios from 'axios'

const BlogEditorPage = () => {
    const TitleInputRef:any = useRef()
    const BodyInputRef:any = useRef()
    const OutputContainerRef:any = useRef()

    const [OutputData, setOutputData] = React.useState("");
    const ConvertBlog = ()=>{
        let data = TextToHtml(BodyInputRef.current.value)
        setOutputData(data)
        OutputContainerRef.current.innerHTML = data
        console.log(data)
    }

    const UploadBlog = async()=>{
        let blogObject = {"id":1,"title":TitleInputRef.current.value,"body":BodyInputRef.current.value}
        const response = await axios.post(`http://${document.location.host}/api/blogedits`, {
            data:blogObject
        })
        console.log(response)
    }


    return (
        <>
            <div className='flex justify-center flex-col w-full items-center '>
                
                <div className='container  py-3 px-3'>
                    <div className="title flex flex-col mb-2">
                        <label htmlFor="TitleInput" className='text-sm font-bold text-gray-400 py-1 '>Title:</label>
                        <input type="text" name="TitleInput" id=""  className='outline-none border-b-2 border-gray-200 text-2xl font-bold text-gray-700 p-2' ref={TitleInputRef}/>
                    </div>
                    <div className="title ">
                        <textarea name="BlogText" className='w-full mt-2 p-2 text-xl resize-none setHeight'  id="" ref={BodyInputRef} ></textarea>
                    </div>
                    <button onClick={UploadBlog} className='py-2 px-4 rounded-md font-bold bg-blue-600 text-white mt-2 ml-2' >
                        Post it 
                    </button>
                    <button onClick={ConvertBlog} className='py-2 px-4 rounded-md font-bold bg-blue-600 text-white mt-2 ml-2' >
                        Compile it
                    </button>
                    <div className="output bg-gray-200 rounded-md p-3 mt-2">
                        {OutputData}
                    </div>
                    <div className="output bg-gray-200 rounded-md p-3 mt-2" ref={OutputContainerRef}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogEditorPage