import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApis';
import { toast } from 'react-toastify';




function Addvideo({ setRes }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    caption: '', image: '', url: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getData = (e) => {
    const { name, value } = e.target
    if (name == "caption") {
      setVideo({ ...video, caption: value })
    }
    if (name == "image") {
      setVideo({ ...video, image: value })
    }
    if (name == "url") {
      const url = value
      const furl = url.split("e/")
      const videoUrl = `https://www.youtube.com/embed/${furl[1]}&autoplay=1`
      // https://youtu.be/9AizchSQURA?si=GeAbfnm4c7Ztcyhj
      setVideo({ ...video, url: videoUrl })
    }
    // console.log(video);
  }
  const handleAddSubmit = async () => {
    const { caption, image, url } = video
    if (!caption || !image || !url) {
      toast("enter all fields")
    } else {
      console.log(video);
      
      const res = await uploadVideo(video)
      if (res.status >= 200 && res.status < 300) {
        setRes(res.data)
        toast.success("uploaded successfully")
        handleClose()
      }
      else {
        toast.error("upload failed")
      }
    }
  }
  return (
    <>
      <span onClick={handleShow} className='btn'>
        <i className="fa-solid fa-circle-plus fa-2x"></i> Add Videos
      </span>


      {/* <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Upload Video</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Control size="sm" onChange={(e)=>{getData(e)}} name="caption" type="text" placeholder="Caption" className='mt-3'/>
    <Form.Control size="sm" onChange={(e)=>{getData(e)}} name="image" type="text" placeholder="Image URL" className='mt-3'/>
    <Form.Control size="sm" onChange={(e)=>{getData(e)}} name="url" type="text" placeholder="Video URL" className='mt-3'/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleAddSubmit} >
        Upload
      </Button>
    </Modal.Footer>
  </Modal> */}
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Upload Video</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Control size="sm" onChange={(e) => { getData(e) }} name="caption" type="text" placeholder="Caption" className='mt-3' />
          <Form.Control size="sm" onChange={(e) => { getData(e) }} name="image" type="text" placeholder="Image URL" className='mt-3' />
          <Form.Control size="sm" onChange={(e) => { getData(e) }} name="url" type="text" placeholder="Video URL" className='mt-3' />
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="primary" onClick={handleAddSubmit} >
            Upload
          </Button>
          </div>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  )
}

export default Addvideo
