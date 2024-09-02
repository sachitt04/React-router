import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState(0)

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sachitt04')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <>
    <div className='flex items-center justify-center '>
        <img  className='rounded-s-full mb-4 mt-4 shadow-sm' src={data.avatar_url} alt="avatar" />
    </div>
    <div className='bg-gray-300 text-center justify-center '>Github Followers : {data.followers} </div>
    
    </>
   
  )
}


export const githubInfoLoader = async ()=>{
  const res = await fetch('https://api.github.com/users/sachitt04')
    return res.json()
}