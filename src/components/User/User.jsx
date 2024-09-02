import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()
  return (
    <div className='bg-green-700 text-white p-4 m-4 '>
        User: {userId} 
        </div>
  )
}
