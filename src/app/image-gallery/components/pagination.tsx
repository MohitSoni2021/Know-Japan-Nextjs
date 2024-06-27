import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const PaginationComponent = ({currentPage, nextFunction, PreviousFunction}:any) => {
  return (
    <div className='flex items-center '>
        <button onClick={PreviousFunction}>
            <GrFormPrevious className='text-4xl bg-gray-300 m-1 rounded-md cursor-pointer'/>
        </button>
        <div className="currentpage bg-gray-300 m-2 rounded-md min-w-[46px] p-1 text-xl flex items-center justify-center font-bold">
            {currentPage}
        </div>
        <button onClick={nextFunction}>
        <MdOutlineNavigateNext className='text-4xl bg-gray-300 m-1 rounded-md cursor-pointer'/>
        </button>
    </div>
  )
}

export default PaginationComponent