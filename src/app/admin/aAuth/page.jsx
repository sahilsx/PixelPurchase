// "use client";
// import React from 'react'
// import { useRouter } from 'next/navigation';
// const IsaAuthenticated = () => {
//     const app =useRouter();
//     const token = localStorage.getItem("token");
//     React.useEffect(() => {
   
//        if (!token) {
//          app.push("/")
//        }
//      }, [token ]);
//      console.log("token",token)
//   return (
//     <div></div>
//   )
// }

// export default IsaAuthenticated;

"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const IsaAuthenticated = () => {
    const app = useRouter();
    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        // Access localStorage only on the client side
        if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
            
            if (!storedToken) {
                app.push("/");
            }
        }
    }, [app]); // Empty dependency array ensures this runs once on component mount

    console.log("token", token);

    return (
        <div></div>
    );
};

export default IsaAuthenticated;
