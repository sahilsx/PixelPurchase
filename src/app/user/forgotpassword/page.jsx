

import { Suspense } from 'react';
import React from 'react';
import ForgotPassword from "../forgotpassword/Clientsearchedpage"
const ForgotPasswordPage = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
      </Suspense>
    );
  };
  
  export default ForgotPasswordPage;