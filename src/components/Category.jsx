import React, { useEffect, useState } from 'react'
import { deleteCategory, getCategory, getSpecificVideo, updateCategory } from '../services/allApis'
import Button from 'react-bootstrap/esm/Button'
import { toast } from 'react-toastify'
import Image from 'react-bootstrap/Image';



function Category({ addStatus  }) {
    const [deleteStatus,SetDeleteStatus]=useState('')
    const [categoryList, SetCategoryList] = useState([])
    const [videoListStatus,setVideoListStatus]=useState('')
    useEffect(() => {
        getData()
    }, [addStatus,deleteStatus,videoListStatus])
    const getData = async () => {
        const res = await getCategory()
        SetCategoryList(res.data)
        // console.log(res);
        // console.log(typeof(categoryList));
    }
    const handleDelete=async(id)=>{
        console.log(id);
        const res=await deleteCategory(id)
        if (res.status>=200 && res.status<300) {
            toast("Deleted Successfully")
            SetDeleteStatus(res.data)
        } else {
            toast('Deletion Failed')
        }
    }
    const handleDrop=async(e,id)=>{
    console.log("category id"+id);
    const vid =e.dataTransfer.getData("videoId")    
    console.log(vid);
    const category=categoryList.find(item=>item.id==id)
    console.log(category);
    const video=await getSpecificVideo(vid)
    console.log(video.data);
    

    const vidlist=category.videos
    const added = vidlist.some(element=>element.caption==video.data.caption)
    if (added) {
        toast.error('already added')
    } else {
        category.videos.push(video.data)
    setVideoListStatus(category.videos)
    const res = await updateCategory(category,id)
    if (res.status>=200 && res.status<300) {
        toast.success( `${video.data.caption} added ${category.name}`)
    } else {
        toast.error('Failed to upload')
    }
    }

    }
    const deleteVideo=async(catId,vidId)=>{
        console.log(vidId);
        const category=categoryList.find(item=>item.id==catId)
        console.log(category.videos);
        const arr=category.videos
        const a=arr.find(item=>item.id==vidId)
        console.log(a);
        const b =arr.indexOf(a)
        console.log(b);
        arr.splice(b,1)
        console.log(arr);
        const data ={...category,videos:arr}
        const res=await updateCategory(data,catId)
        if (res.status>=200 && res.status<300) {
            toast('success')
            getData()
        } else {
            toast('error')
        }
           


    }
    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log('dragging over');
    }
    return (
        <div className='m-3 border-2 p-2'>
            <h3>Categories</h3>
            {
                categoryList.length>0 ?
                    categoryList.map((item) => (
                        <div className='card mt-2'key={item.id} onDrop={(e)=>{handleDrop(e,item.id)}} onDragOver={(e)=>{handleDragOver(e)}}>
                            <div className='p-1 pt-1 ms-2 d-flex justify-content-between'  >
                                {item.name}
                                <Button onClick={() => {handleDelete(item.id)}} className='bg-light'  >
                                    <i className="fa-solid fa-trash fa-sm" style={{ color: 'black' }} ></i>
                                </Button>
                                
                            </div>
                            <div className='row'>
                                {item?.videos.map(element=>(
                                    <div className='ms-4 mb-2 col-11'>
                                        <Image src={element.image} style={{width:'300px',height:'150px'}}/><br/>
                                        <div></div>
                                        {element.caption}   
                                        <i className="fa-regular fa-trash-can float-end mt-1 pe-1" onClick={()=>{deleteVideo(item.id,element.id)}}></i>
                                        
                                    </div>
                                    
                                ))}
                            </div>
                        </div>
                    )) :
                    <h2>No category</h2>
            }
        </div>
    )
}

export default Category
