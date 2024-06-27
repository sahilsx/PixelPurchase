// pages/api/auth.js

// import jwt from 'jsonwebtoken';
// import cookie from 'cookie';
// import messageHandler from "../../../utils/feature"
// // import { NextApiRequest, NextApiResponse } from 'next';

// require('dotenv').config();



// const isAuthenticated = (handler) => async (req, res) => {
//     try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;

//         if (!token) {
//             return messageHandler(res,400,"Unauthorized needs to be logged in!")
//         }

//         jwt.verify(token, "mylatimlamangaranchu", (err, decoded) => {
//             if (err) {
//                 return messageHandler(res,400,"some server every please try later!")
//             }
//             const stoken = sessionStorage.setItemItem(token);
//             req.userid = decoded.userId; 
//             return handler(req, res); 
//         });
//     } catch (error) {
//         console.error('Error in authentication middleware:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

// export default isAuthenticated;
