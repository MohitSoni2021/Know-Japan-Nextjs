
import React from 'react'
import ImageCardImageGallery from './ImageCard'

const ImageGalleryImageContainer = ({Images}:any) => {
  return (
    <div className="grid grid-cols-2 gap-3 p-3 lg:grid-cols-6" >
        {
            Images
        }
    </div>
  )
}

export default ImageGalleryImageContainer