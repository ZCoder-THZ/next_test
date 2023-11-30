import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>About Page

<Link href="/dashboard" className='bg-red-500 text-black-500 mx-auto'>Dashboard</Link>
    </div>
  )
}


export default page;