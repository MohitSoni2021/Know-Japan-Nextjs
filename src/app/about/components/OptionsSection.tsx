import Link from 'next/link'
import React from 'react'

const OptionsSectionAboutPage = () => {
  return (
    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 m-3 '  >
        <Link href={"/images"}>
        <div className="bg-white border-2 border-gray-300 rounded-md w-full py-4 shadow-md shadow-gray-300 hover:shadow-blue-900 p-2 text-center hover:bg-gray-300 text-xl font-bold">Images</div>
        </Link>
        <Link href={"/shorts"}>
        <div className="bg-white border-2 border-gray-300 rounded-md w-full py-4 shadow-md shadow-gray-300 hover:shadow-blue-900 p-2 text-center hover:bg-gray-300 text-xl font-bold">Shorts</div>
        </Link>
        <Link href={"/blogs"}>
        <div className="bg-white border-2 border-gray-300 rounded-md w-full py-4 shadow-md shadow-gray-300 hover:shadow-blue-900 p-2 text-center hover:bg-gray-300 text-xl font-bold">Blogs</div>
        </Link>
        <Link href={"/blogs"}>
        <div className="bg-white border-2 border-gray-300 rounded-md w-full py-4 shadow-md shadow-gray-300 hover:shadow-blue-900 p-2 text-center hover:bg-gray-300 text-xl font-bold">Seasons</div>
        </Link>
    </div>
  )
}

export default OptionsSectionAboutPage