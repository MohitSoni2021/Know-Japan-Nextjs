import { Suspense } from 'react';
import '../components/styles/HomePage.css'
import LoaderComponenet from '@/components/loader';
import ImageLoadingSkeleton from '@/components/Skeletons/ImageLoadingSkeleton';

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoaderComponenet/>}>
        <div className="grid grid-cols-2 gap-2 h-screen lessThanvh max-md:grid-cols-1 max-md:gap-0 overflow-x-hidden">

          <div className="imageContainer my-auto">
            <div className="img relative w-full flex items-center rounded-md max-sm:mx-3">
              <Suspense fallback={<ImageLoadingSkeleton />}>
                <img src="https://img.freepik.com/free-vector/collection-flat-design-japanese-temples_52683-44314.jpg?w=826&t=st=1718893788~exp=1718894388~hmac=3e6e9478b15ca9644fd2195808b213dc55220d031a50894ed95f75c96ce6644f" alt="no data" className=' select-none w-full rounded-md aspect-video' />
              </Suspense>
            </div>
          </div>

          <div className="content-container my-auto">
            <div className="quote w-full anton-regular text-center flex items-center max-sm:items-start py-5  px-2">
              <div>
                <h2 className='text-3xl py-3 '>Japan</h2>
                <p className='h-full flex ubuntu font-bold'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ducimus quasi officiis aut hic animi esse deleniti adipisci optio, harum sequi quibusdam modi enim blanditiis, ipsa, aperiam soluta tempora sunt illum voluptates perferendis rerum. Quidem magnam dignissimos ullam tempora nisi quia nobis? Quos hic maxime eos? Ullam natus vel ipsum harum animi, illo ab ea praesentium unde expedita voluptatibus
                </p>
              </div>
            </div>
          </div>

        </div>
      </Suspense>
    </>
  );
}
