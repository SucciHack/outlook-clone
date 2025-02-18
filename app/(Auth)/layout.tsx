import { getSession } from '@/lib/dal'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Toaster } from "react-hot-toast"
 
export default async function Layout({children}:{children:ReactNode}) {
  const session = await getSession()
  if(!session){
    return(redirect("/register"))
  }
  return (
    <body>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {children}
    </body>
  )
}
