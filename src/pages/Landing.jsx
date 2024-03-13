import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';

// import media from 'assets/media.png'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center p-5' style={{ height: '80vh' }}>
        <div className='row'>
          <div className='col shadow'>
            <h2>Media Player</h2>

            <p style={{ textAlign: 'justify' }}>A media player is a software or a hardware device that is used to play audio and video files. It can play digital media files from a storage device, a disc, or streamed from the internet.
              Media Player is a Universa Video Player for Android, you can easily play any video files with the media player. The Media Player can handle all popular video and music formats including: mp3, mp4, wmv, avi, mkv, dv, rm, mp, mpeg ect.
              Media Player finds all your videos automatically for you. and show format converting of videos. With the media player, you just put your video on sdcard or click the URL in browser to watch it.
            </p>
            <Link className='btn btn-success'to={'dashboard'}>Explore</Link>
          </div>
          <div className='col'>

            <img className='img-fluid rounded shadow'
              src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif" alt="no image" style={{ width: '100%', height: '50vh' }} />
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex justify-content-between p-3'>
          <Card style={{ width: '30rem' ,height:'400px' }}>
            <Card.Img variant="top" style={{height:'250px'}} src="https://www.amritaz.com/wp-content/uploads/2020/05/upload-download.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem',height:'400px' }}>
            <Card.Img variant="top" style={{height:'250px'}}
            src="https://images.squarespace-cdn.com/content/v1/6414da6d6c33117e0258ae15/18851396-3947-4dd6-94cb-9c6d900056d9/watch+now+gif+copy.gif" />
            <Card.Body>
              <Card.Title>Play Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '30rem',height:'400px' }}>
            <Card.Img variant="top" style={{height:'250px'}}
            src="https://i.gifer.com/F1Wp.gif" />
            <Card.Body>
              <Card.Title>History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2>Why Media Player?</h2>
        <div className='d-flex mt-2 justify-content-center align-items-center'>
          <div>
            <h4>Simple,secure,friendly..</h4>
            <p style={{textAlign:'justify',paddingRight:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim porro eius accusantium perspiciatis nulla excepturi ratione sequi animi? Officia minus optio suscipit sit a. Voluptatem quibusdam cupiditate ex molestiae.</p>
          </div>
          <div>
            <iframe width="560" height="315" style={{opacity:'0.7'}}
            src="https://www.youtube.com/embed/oefsQlYYcvY?si=fhKHsLq9r-f2igdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
