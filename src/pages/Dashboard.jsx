import React, { useState } from 'react'
import Addvideo from '../components/Addvideo'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


function Dashboard() {
  const [resstatus, setResStatus] = useState("")
  
  return (
    <>
      <h2 className='ms-5 mt-2'>
        Dashboard
      </h2>


      <hr />
      <Row className='m-2' >
        <Col md='9'>
          <Videos addStatus={resstatus}/>
        </Col>
        <Col sm='1' md='3' className='border-start border-primary'>
          <Link to={'/history'} style={{ textDecoration: 'none' }}>
            <span className='btn'>
              <i className="fa-solid fa-clock-rotate-left fa-xl"></i> Watch History
            </span>
          </Link>
          <br />
          <Addvideo setRes={setResStatus} />
          <Categories />
        </Col>

      </Row>
      <ToastContainer />
    </>


  )
}

export default Dashboard
