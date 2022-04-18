import React from 'react'
import './StickyLight.css'
import { useNavigate } from 'react-router-dom'
export default function StickyLight() {
   const navigate = useNavigate();


    const naviToAddPost = ()=>{
        navigate('/addidea');
    }
  return (
    <div className='theLightDiv'>
        <img className='theImg' src="Media/creativeidea.png" onClick={naviToAddPost}/>

    </div>
  )
}
