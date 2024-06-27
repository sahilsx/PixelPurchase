import React from 'react'
import { useRouter } from 'next/navigation';
const IsAuthenticated = () => {
    const app =useRouter();
    const token = sessionStorage.getItem("token");
    React.useEffect(() => {
   
       if (!token) {
         app.push("/user/login")
       }
     }, [token ]);
     console.log("token",token)
  return (
    <div></div>
  )
}

export default IsAuthenticated;