// "use client";
// import React from 'react'
// import { useRouter } from 'next/navigation';
// const IsAuthenticated = () => {
//     const app =useRouter();
//     const user = sessionStorage.getItem("user");
//     React.useEffect(() => {
   
//        if (!user) {
//          app.push("/user/login")
//        }
//      }, [user ]);
//      console.log("user",user)
//   return (
//     <div></div>
//   )
// }

// export default IsAuthenticated;
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const IsAuthenticated = () => {
  const router = useRouter();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // This will run only on the client side
    if (typeof window !== 'undefined') {
      const storedUser = sessionStorage.getItem("user");
      setUser(storedUser);

      // Redirect to login if user is not authenticated
      if (!storedUser) {
        router.push("/user/login");
      }
    }
  }, [router]);

  // For debugging purposes
  console.log("user", user);

  return (
    <div>
      {/* Optionally render something here if user is authenticated */}
    </div>
  );
}


export default IsAuthenticated;
