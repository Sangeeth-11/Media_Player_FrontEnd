import React, { useEffect, useState } from 'react'
import { deleteHistory, getHistory } from '../services/allApis'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

function History() {
  const [getHist, SetGetHist] = useState([])
  const [deleteStatus, SetDeleteStatus] = useState('')
  useEffect(() => {
    getData()
  }, [deleteStatus])
  const getData = async () => {
    const res = await getHistory()
    const data = res.data
    data.reverse()
    const removeDuplicate = []
    const captionName = []
    data.forEach(element => {
      if (!captionName.includes(element.caption)) {
        captionName.push(element.caption)
        removeDuplicate.push(element)
      }
    });
    SetGetHist(removeDuplicate)
  }
  const handleDelete = async (id) => {
    const res = await deleteHistory(id)
    if (res.status >= 200 && res.status < 300) {
      SetDeleteStatus(res)
      toast.success("Deleted")
    } else {
      toast.error("Deletion Failed")
    }
  }
  return (
    <>
      <h2 style={{ fontFamily: 'Cursive', borderBottom: '1px solid black', padding: '20px' }}>Watch History</h2>
      {
        getHist.length > 0 ?
          getHist.map(item => (
            <div className='row mx-5 my-2' style={{ border: '2px solid black' }} key={item.id}>
              <div className='col-2 p-1'>
                <Image src={item.image} style={{ height: '150px', width: '250px' }} />

              </div>
              <div className='col-9 p-1'>
                <h3 style={{ fontFamily: "serif" }} className='mb-3 mt-1'>

                  {item.caption}<br />
                </h3>
                <a href={item.url} target='_blank'>
                  {item.url}
                </a>
                <br />
                <h6 style={{ fontFamily: 'monospace' }} className='mt-2'>
                  Last played on:
                  {item.date}&nbsp;
                  {item.time}
                </h6>
              </div>
              <div className='col-1 text-end'>
                <Button onClick={() => { handleDelete(item.id) }} className='bg-light border-0'>
                  <i className="fa-solid fa-trash" style={{ color: 'black' }} ></i>
                </Button>
              </div>

            </div>

          )) : <h4 style={{ fontFamily: 'Cursive' }}>Nothing watched yet!!!!!</h4>
      }
    </>
  )
}

export default History
