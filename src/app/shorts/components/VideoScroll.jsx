"use client"

import React, { Suspense, useEffect, useRef, useState } from 'react'
import './VideoScroll.css'
import LoaderComponenet from '../../../components/loader'
import axios from 'axios'


const VideoCard = ({VideoUrl}) => {
    const VideoCardRef = useRef()
    const [DiamentionContainer, setDiamentionContainer] = React.useState();
    const [IsFrameLoaded, setIsFrameLoaded] = useState(false);

    const dataFunction = () => {
        setDiamentionContainer(VideoCardRef.current.clientHeight - 60)
    }

    useEffect(() => {
        dataFunction()
    }, [])

    return (
        <>
            <div className='min-h-full h-full w-full my-3 '>
                <div ref={VideoCardRef} className="card min-h-full rounded-lg mx-auto relative ">
                    <Suspense fallback={<LoaderComponenet />}>
                        {IsFrameLoaded ? <></> :<div className='absolute top-0 w-full h-full flex items-center justify-center'><LoaderComponenet/></div>}
                        <iframe src={VideoUrl} height={DiamentionContainer} frameBorder="0" className='mx-auto rounded-lg cardHight my-auto' allowFullScreen onLoad={()=>{setIsFrameLoaded(true)}} loading={"lazy"}></iframe>
                    </Suspense>
                </div>
            </div>
            <br />
        </>
    )
}

{/* <iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/Ac5RiS4b#fS4zNGBOA5k-TBvs0EPt3BPFXHTyxq021BqbyOoNRrs" allowfullscreen ></iframe> */ }


const VideoScrollComponent = () => {
    const LoadingMessageRef  = useRef()

    const [FetchedData, setFetchedData] = React.useState([]);
    const [PageCounts, setPageCounts] = React.useState(2);
    const [TotalDataLength, setTotalDataLength] = React.useState(3);

    const GetDataLength = async () => {

        const lenght = (await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1nMbARVy5X1xGFZjzObizQOI7FHKlPfEyAaieCwpeJi0/values/Sheet2?key=AIzaSyAKC5-3dr0JTBSzfVpRAr1CCBKlWXhqLno`)).data.values.length
        setTotalDataLength(lenght)
    }

    const InfiniteScroll = async () => {
        if (PageCounts <= TotalDataLength) {
            LoadingMessageRef.current.classList.remove("hidden")
            LoadingMessageRef.current.innerText = "Loading..."
            const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1nMbARVy5X1xGFZjzObizQOI7FHKlPfEyAaieCwpeJi0/values/Sheet2!A${PageCounts}:Z${PageCounts + 3}?key=AIzaSyAKC5-3dr0JTBSzfVpRAr1CCBKlWXhqLno`)
            setPageCounts(PageCounts + 4)
            let data = [... response.data.values]
            data.forEach((ele)=>{
                setFetchedData(prevArray => [...prevArray, ele])
            })
            LoadingMessageRef.current.classList.add("hidden")
        }else{
            LoadingMessageRef.current.classList.remove("hidden")
            LoadingMessageRef.current.innerText = "No More data"
            LoadingMessageRef.current.classList.remove("bg-green-500")
            LoadingMessageRef.current.classList.add("bg-red-700")
            LoadingMessageRef.current.classList.add("hidden")
            LoadingMessageRef.current.classList.add("bg-green-500")
            LoadingMessageRef.current.classList.remove("bg-red-700")
        }
    }

    const ManageScroll = (e)=>{
        if ((e.target.scrollTop + e.target.offsetHeight+50)>=e.target.scrollHeight){
            console.log(LoadingMessageRef.current.classList)
            InfiniteScroll()
            console.log("fetched...")
        }
    }

    

    useEffect(() => {
        GetDataLength()
        InfiniteScroll()
    }, [])

    return (
        <>
            <div className="outerScrollContainer overflow-y-scroll overflow-x-hidden getScreenSize py-3 gap-3" onScroll={ManageScroll}>
                {
                    FetchedData.map((ele, id)=>{
                        return (
                            <Suspense fallback={<LoaderComponenet/>}>
                                <VideoCard VideoUrl={ele} key={id} />
                            </Suspense>
                        )
                    })
                }
                
                
            </div>
            <div className=' absolute bottom-1 hidden left-1 bg-green-500 z-50 py-2 px-4 font-bold text-white rounded-lg ' ref={LoadingMessageRef}>
                Loading..
            </div>
        </>
    )
}

export default VideoScrollComponent