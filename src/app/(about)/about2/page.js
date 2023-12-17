'use client'
import React,{useState} from 'react'
import Link from 'next/link'

const page = () => {
  const [name,setName]=useState('what ever')
  return (
    <div>About Page {name}

<Link href="/dashboard" className='bg-red-500 text-black-500 mx-auto'>Dashboard</Link>
    </div>
  )
}


export default page;