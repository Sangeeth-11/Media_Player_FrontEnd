import React,{useEffect,useState} from 'react'
import Videocard from './Videocard'
import { getVideo } from '../services/allApis'


function Videos({addStatus,setHis}) {
  const [videoList,setVideoList]= useState([])
  const [delStatus,SetdelStatus]=useState("")
  useEffect(()=>{
    getData()
  },[addStatus,delStatus])
  const getData=async()=>{
    const res = await getVideo()
    setVideoList(res.data)
    // console.log(res);
  }
  return (
    <>
    <div className='w-100 row'>
      {
        videoList.length>0? 
        videoList.map((item)=>(
          <Videocard video={item} del={SetdelStatus} key={item.id}/>
        )):
        <h3>No video Available</h3>
      }
    </div>
    </>
  )
}

export default Videos
