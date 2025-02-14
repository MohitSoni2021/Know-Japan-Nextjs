"use client"
import React, { Suspense, useEffect, useRef } from 'react'
import ImageGalleryImageContainer from './components/ImageGalleryImageContainer'
import axios from 'axios';
import ImageCardImageGallery from './components/ImageCard';
import WaveLoader from '@/components/Skeletons/WaveLoader';
import PaginationComponent from './components/pagination';
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoIosCloseCircle } from "react-icons/io";

const style = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    // transform: 'translate(-50%, -50%)',
    // "max-width": 900,
    // "max-height":600,
    width: "100%",
    height: "100%",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "box-sizing": "border-box",
    "flex-direction": "column",
    p: 0,
    "background-color": "rgba(0, 0, 0, 0.6)",
    "-webkit-backdrop-filter": "blur(5px)",
    "backdrop-filter": "blur(5px)"
};


const ImageGalleryPage = () => {
    const param = useSearchParams()
    const router = useRouter()
    const [ApiResponseData, setApiResponseData] = React.useState([]);
    const ImagePreviewHandler: any = useRef()
    const [ImageOrder, setImageOrder] = React.useState("popular");

    // ImageFiltering 
    const [ImageType, setImageType] = React.useState("all");
    const FilterContainerRef: any = useRef()

    const GetApiResponse = async () => {
        if (param.get('page')) {
            const ApiResponse = await axios.get(`https://pixabay.com/api/?key=44617716-a38633567def4f099d2137ac4&q=Japan&image_type=${ImageType}&pretty=true&page=${param.get("page")}&per_page=40&order=${ImageOrder}`)
            setApiResponseData(ApiResponse.data.hits)
        } else {
            router.push("/image-gallery?page=1")
            router.refresh()
        }

    }

    useEffect(() => {
        setTimeout(() => {
            FilterContainerRef.current.childNodes.forEach((ele: any) => { ele.classList.toggle("border-b-4") })
            FilterContainerRef.current.childNodes.forEach((ele: any) => { ele.classList.toggle("border-blue-600") })
        }, 100);
    }, [ImageOrder])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const nextFunction = () => {
          const page = parseInt(param.get("page") || "1"); // Default to "1" if null
          router.push(`/image-gallery?page=${page + 1}`);
        };
        
        const PreviousFunction = () => {
          const page = parseInt(param.get("page") || "1"); // Default to "1" if null
          router.push(`/image-gallery?page=${page <= 1 ? 1 : page - 1}`);
        };

    const OpenPreviewImageWindow = (e: any) => {
        handleOpen()
        setTimeout(() => {
            ImagePreviewHandler.current.src = e.target.alt
        }, 100);
    }

    useEffect(() => {
        GetApiResponse()
    }, [param.get("page"), ImageOrder, ImageType])

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='h-full w-full flex items-center justify-center' onClick={handleClose}>
                            <Suspense fallback={<WaveLoader />}>
                                <img src="" alt="" className='max-h-[560px] max-w-[900px] max-sm:max-w-[320px] border-2 rounded-md' ref={ImagePreviewHandler} />
                            </Suspense>
                        </div>
                    </Box>
                </Modal>
            </div>

            <div className="allFilterOptions flex items-center gap-2">
                <div className="filterBox m-2 border-1 p-2 rounded-md" ref={FilterContainerRef} >
                    <button onClick={(e) => setImageOrder(e.target.innerText.toLowerCase())} className=" py-1 px-2 mr-2 border-b-4 border-blue-600">Popular</button>
                    <button onClick={(e) => setImageOrder(e.target.innerText.toLowerCase())} className=" py-1 px-2  ">Latest</button>
                </div>
                <div className='m-2 border-1 p-2 rounded-md'>
                    <select name="" id="" className='py-1 px-2 outline-none bg-white border-b-4 border-blue-600 text-center' onChange={(e:any)=>{setImageType(e.target.value)}}>
                        <option value="photo">photo</option>
                        <option value="vector">vector</option>
                        <option value="all" selected>all</option>
                        <option value="illustration">illustration</option>
                    </select>
                </div>
            </div>

            <div className=''>
                <Suspense fallback={<WaveLoader />}>
                    <ImageGalleryImageContainer
                        Images={
                            ApiResponseData.map((ele: any, i: number) => {
                                return <ImageCardImageGallery preview_url={ele.previewURL} hd_url={ele.largeImageURL} ShowImagePreivewWindowFunction={OpenPreviewImageWindow} key={i} />
                            })
                        }
                    />
                </Suspense>
            </div>
            <PaginationComponent
                currentPage={param.get("page")}
                nextFunction={nextFunction}
                PreviousFunction={PreviousFunction}
            />
        </>
    )
}

export default ImageGalleryPage
