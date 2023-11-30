import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='text-center text-red-500'>Hello Next Js 
<Link href="/about2" className='bg-red-500 text-black-500 mx-auto'>about2</Link>

    </div>
    
  )
}

export default page