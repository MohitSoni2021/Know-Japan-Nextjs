import LoaderComponenet from '@/components/loader';
import { Suspense, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImagedisplayerCard({img_url}) {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className=" border-2 border-gray-300 w-full h-full bg-gray-300 aspect-video p-0 m-0 rounded-md" onClick={() => handleShow(v)}>
                    <Suspense fallback={<LoaderComponenet/>}>
                    <img src={img_url} className=' aspect-square w-full h-full rounded-md z-50' alt="" />
                    </Suspense>
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className=' transparentBg' backdrop backdropClassName=''>
                    <Modal.Header closeButton className=' transparentBg border-b-0'>
                    </Modal.Header>
                <Modal.Body className='transparentBg p-1'>
                    <div className=" w-full h-full flex items-center justify-center p-0">
                        <Suspense fallback={<LoaderComponenet/>}>
                        <img src={img_url} className=' rounded-md max-w-[700px] max-md:w-full max-h-[500px] border-2 border-gray-400'  alt="" />
                        </Suspense>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagedisplayerCard;