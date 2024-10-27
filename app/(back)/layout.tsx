import React,{ ReactNode} from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div><h2>
        I ama dashboard only pages layout
        {children}
        </h2></div>
  )
}