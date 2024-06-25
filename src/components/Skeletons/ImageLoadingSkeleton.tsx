import React from 'react'
import '../../components/styles/Skeletons/ImageLoadingSkeleton.css'

function ImageLoadingSkeleton() {
    return ( 
        <>
            <div className='w-full h-full rounded-lg aspect-video text-white text-2xl font-bold bg-gray-500 flex items-center justify-center loadingAnimation transition-all duration-100'>
                Loading...
            </div>        
        </>
     );
}

export default ImageLoadingSkeleton;