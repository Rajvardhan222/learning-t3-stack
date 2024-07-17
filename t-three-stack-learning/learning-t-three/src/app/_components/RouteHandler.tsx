'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useUserContext } from './Context';

function RouteHandler() {
 
    let {user} = useUserContext()
    let router = useRouter()
  
    useEffect(() => {
      
         if(!user.isLoggedIn){
            router.push('/signup')
         }
    }, [])
    
  return (
   
     <div>

     </div>
   
  )
}

export default RouteHandler