import React, { Suspense } from 'react'
import Navbar from '../../components/Navbar'
import VideoScrollComponent from './components/VideoScroll'
import LoaderComponenet from '@/components/loader'

const ShortsPage = () => {
  return (
    <>
    <Suspense fallback={<LoaderComponenet/>}>
      <VideoScrollComponent/>
    </Suspense>
    </>
  )
}

export default ShortsPage