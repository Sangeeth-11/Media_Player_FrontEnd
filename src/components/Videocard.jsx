import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';

function Videocard({ video, del }) {
    const [show, setShow] = useState(false);
    

    const handleShow = async(video) => {
        setShow(true);
        const dat=new Date()
        let d=dat.toString().split(' ').slice(0,5)
        let date=`${d[2]}-${d[1]}-${d[3]}`
        let time = `${d[0]}-${d[4]}`
        
       
        const data={caption:video.caption,url:video.url,image:video.image,date:date,time:time}
        const res=await addHistory(data)
        if (res.status>=200 && res.status<300) {
            console.log('Add Successfully');
        } else {
            console.log('history upload failed');
        }
        
    }
    const handleClose = () => setShow(false);
    const handleDelete = async (id) => {
        const res = await deleteVideo(id)
        if (res.status >= 200 && res.status < 300) {
            del(res.data)
            toast.success('Video Deleted')
        } else {
            toast.error('Error while deleting')
        }
    }
    const handleDrag=(e,id)=>{
        console.log(id);
        e.dataTransfer.setData("videoId",id)
    }
    return (
        <div className='col-3'>
            <Card style={{ border: 'none' }} className='mt-2 w-100' draggable onDragStart={(e)=>{handleDrag(e,video?.id)}}>
                <Card.Img variant="top" src={video.image} style={{ height: '250px' }} onClick={()=>{handleShow(video)}} />
                <Card.Body className='border-top-0 border border-secondary border-1 rounded-bottom'>
                    <Card.Title className='d-flex justify-content-between'>{video.caption}
                        <Button onClick={() => { handleDelete(video.id) }} className='bg-light rounded-circle'>
                            <i className="fa-solid fa-trash" style={{ color: 'black' }} ></i>
                        </Button>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal show={show} fullscreen={true} >
                <Modal.Header style={{ backgroundColor: 'black', color: 'white' }}>
                    <Modal.Title>{video.caption}</Modal.Title>
                    <Button onClick={handleClose} style={{color:'white',backgroundColor:"black",border:'none'}}>
                    <i className="fa-regular fa-circle-xmark fa-2x"></i>
                        
                    </Button>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>
                    <iframe width="100%" height="98%" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Videocard
