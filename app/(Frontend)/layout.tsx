import { Header } from '@/components/header'
import Sidebar from '@/components/sidebar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='pt-[3rem] pl-[3rem] fixed top-0'>
             {children}
        </div>
    </div>
  )
}
