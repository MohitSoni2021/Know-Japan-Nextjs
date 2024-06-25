import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImagedisplayerCard() {
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
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                <Modal.Body>
                    <div className=" w-full h-full flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1719263233866-a4e4908cf3af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='rounded-md max-w-[700px] max-md:w-full max-h-[500px]'  alt="" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagedisplayerCard;