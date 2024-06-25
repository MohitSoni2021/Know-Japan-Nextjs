import Link from 'next/link';
import React from 'react'

function BlogDisplayCard(props:any) {
    return (
        <>
            <div className=" py-3 max-sm:py-2 flex justify-center px-3">
                <Link href={`/blogs/${props.id}`}>
                    <div className="container shadow-lg pb-4 pt-1 border-2 hover:bg-gray-100 cursor-pointer rounded-md">
                        <div className="post-Container  mx-2 rounded-md py-2">
                            <div className="text-end text-sm text-gray-400  px-2">
                                {props.blogDate}
                            </div>
                            <div className="ContentContainer rounded py-1 px-2">
                                <h2 className="max-sm:text-xl text-2xl font-bold">
                                    {props.blogHeading}
                                </h2>
                                <p className=' line-clamp-2 max-sm:text-sm'>
                                    {props.blogBody}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default BlogDisplayCard;