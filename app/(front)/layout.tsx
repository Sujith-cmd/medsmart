import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React,{ ReactNode} from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-blue-500'>
        <Navbar/>
          <div className="max-w-5xl mx-auto py-3 border-solid border-red-900">

<MegaMenu/>
</div>

   
        {children}
        </div>
  )
}
