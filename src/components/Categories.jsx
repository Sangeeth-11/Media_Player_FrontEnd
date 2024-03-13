import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allApis';
import Category from './Category';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Categories() {
  const [show, setShow] = useState(false);
  const [categoryData, SetCategoryData] = useState("")
  const [categoryStatus,SetCategoryStatus] = useState('')

  const handleClose = () => {
    setShow(false);
    SetCategoryData('')
  }
  const handleShow = () => setShow(true);
  const handleData = (e) => {
    const val = e.target.value
    if (val) {
      // console.log(val);
      SetCategoryData(val)
    }



  }
  const handleSubmit = async () => {
    console.log(categoryData);
    if (!categoryData) {
      toast.info('Enter fields')
    } else {
      const data = { name: categoryData,videos:[] }
      const res = await addCategory(data)
      if (res.status >= 200 && res.status < 300) {
        toast.success("uploaded successfully")
        SetCategoryStatus(res.data)
        SetCategoryData('')
        handleClose()
      }
      else {
        toast.error("upload failed")
      }

    }
  }
  return (
    <>
      <div>
        <span onClick={handleShow} className='btn'>
          <i className="fa-solid fa-circle-plus fa-2x"></i> Add Categories
        </span>
        {/* <Button variant='info' onClick={handleShow}>Add Category</Button> */}
      </div>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Category Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Control type="text" placeholder="Category" name='category' onChange={(e) => { handleData(e) }} />
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="info" onClick={handleSubmit} >
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          </div>
        </Offcanvas.Body>

      </Offcanvas>
      <Category addStatus={categoryStatus} />
    </>
  )
}

export default Categories
