"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
const IsAuthenticated = () => {
    const app =useRouter();
    const user = sessionStorage.getItem("user");
    React.useEffect(() => {
   
       if (!user) {
         app.push("/user/login")
       }
     }, [user ]);
     console.log("user",user)
  return (
    <div></div>
  )
}

export default IsAuthenticated;