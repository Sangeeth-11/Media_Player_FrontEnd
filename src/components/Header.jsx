import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div style={{ border: 'solid 2px black',backgroundColor:'green' }}>
      <Navbar style={{ border: 'none' ,backgroundColor:'green'}} >
        <Container>
          <Link to={''} style={{ textDecoration: 'none' }} >
            <Navbar.Brand>

              <span className="fa-stack fa-1x">
                <i className="fa-solid fa-volleyball fa-stack-2x fa-beat" style={{color:'black'}}></i>
                <i className="fa-solid fa-circle-play fa-stack-2x fa-inverse" style={{color:'green'}} ></i>
              </span>

              {' '}
              Media Player
            </Navbar.Brand></Link>
          <div className='d-flex'>
            <Link to={'dashboard'} style={{ color: 'black', textDecoration: 'none', paddingRight: '10px' }}>Dashboard</Link><br />
            <Link to={'history'} style={{ color: 'black', textDecoration: 'none' }}>History</Link><br />
          </div>
        </Container>

      </Navbar>
    </div>
  )
}

export default Header
