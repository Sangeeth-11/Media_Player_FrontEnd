import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-100 bg-secondary'>
      <div className='row p-5' style={{color:'black'}}>
        <div className='col-6'>
          <h4>Media Player 2024</h4>
          <p style={{ textAlign: 'justify' }}>
            A media player is a software or a hardware device that is used to play audio and video files. It can play digital media files from a storage device, a disc, or streamed from the internet.
          </p>
        </div>
        <div className='col'>
          <h4>Page Links</h4>
          <Link to={''} style={{ color: 'black', textDecoration: 'none' }}>Landing</Link><br />
          <Link to={'dashboard'} style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Link><br />
          <Link to={'History'} style={{ color: 'black', textDecoration: 'none' }}>History</Link>
        </div>
        <div className='col'>
          <h4>Reference</h4>
          <a href="https://getbootstrap.com/" style={{ color: 'black', textDecoration: 'none' }}>Bootstrap</a><br />
          <a href="https://react-bootstrap.netlify.app/" style={{ color: 'black', textDecoration: 'none' }}>React-Bootstrap</a><br />
          <a href="https://react.dev/" style={{ color: 'black', textDecoration: 'none' }}>React</a>
        </div>
      </div>
      <div className='text-center'>
        <p>&copy;Media Player 2024</p>
      </div>

    </div>
  )
}

export default Footer
