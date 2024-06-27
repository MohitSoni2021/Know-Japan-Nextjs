"use client"
import WaveLoader from '@/components/Skeletons/WaveLoader'
import React, { Suspense } from 'react'

const ImageCardImageGallery = ({ preview_url, hd_url, ShowImagePreivewWindowFunction }: any) => {
  return (
    <>
      <Suspense>
            <div>
                <div className='w-full h-full rounded-md aspect-video overflow-hidden bg-gray-300 flex items-center justify-center' >
                      <img src={preview_url} alt={hd_url}  loading={"lazy"} className='w-full cursor-pointer' onClick={ShowImagePreivewWindowFunction}/> 
                </div>
            </div>
        </Suspense>
    </>
  )
}

export default ImageCardImageGallery


// "use client"
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function ImageCardImageGallery() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen} className='py-5 my-5'>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }



