"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
const IsaAuthenticated = () => {
    const app =useRouter();
    const token = localStorage.getItem("token");
    React.useEffect(() => {
   
       if (!token) {
         app.push("/")
       }
     }, [token ]);
     console.log("token",token)
  return (
    <div></div>
  )
}

export default IsaAuthenticated;