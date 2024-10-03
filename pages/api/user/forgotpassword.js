// import connection from "../../../utils/condb"
// import messageHandler from "../../../utils/feature"
// import User from "../../../models/usermodel"
// import jwt from "jsonwebtoken"




// const handler = async (req, res) => {
//     await connection();
//     const { token } = req.query;
//     const { newPassword } = req.body;
//     console.log(req.body);
//     console.log(req.query);

//     try {
       
//         if (!token || !newPassword) {
//             return messageHandler(res, 400, "Token And New Password are required");
//         }

      
//         let decodedToken;
//         try {
//             decodedToken = jwt.verify(token,"key");
//         } catch (err) {
//             return messageHandler(res, 400, "invalid Token or Expired");;
//         }

        
//         const user = await User.findOne({ where: { _id: decodedToken._id } });
//         if (!user) {
//             return messageHandler(res, 404, "User not found");
//         }

        
//         if (newPassword.length < 6) {
//             return messageHandler(res, 400, "Password must be at least 6 characters long");;
//         }

      
        
//         const isMatch = await bcrypt.compare(newPassword,user.password);;
       

//         if (isMatch) {
//             return messageHandler(res, 400, "New password cannot be the same as the old password");
//         }
//         user.password = newPassword;
//         await user.save();

     

     
//         messageHandler(res, 200, "Password Updated successfully");
//     } catch (error) {
        
//         console.error('Error resetting password:', error);

      
//         res.status(500).json({ error: 'An error occurred. Please try again later.' });
//     }
// }



// export default handler;


import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import User from "../../../models/usermodel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // Make sure to import bcrypt

const handler = async (req, res) => {
    await connection();
    const { token } = req.query;
    const { newPassword } = req.body;
    console.log(req.body);
    console.log(req.query);

    try {
        // Check for required fields
        if (!token || !newPassword) {
            return messageHandler(res, 400, "Token and New Password are required");
        }

        let decodedToken;
        try {
            
            decodedToken = jwt.verify(token, "key"); 
        } catch (err) {
            return messageHandler(res, 400, "Invalid Token or Expired");
        }

        console.log(decodedToken.id);
        const user = await User.findById(decodedToken.id); 
        if (!user) {
            return messageHandler(res, 404, "User not found");
        }

        // Validate the new password length
        if (newPassword.length < 6) {
            return messageHandler(res, 400, "Password must be at least 6 characters long");
        }

        // Check if the new password is the same as the old one
        const isMatch = await bcrypt.compare(newPassword, user.password);
        if (isMatch) {
            return messageHandler(res, 400, "New password cannot be the same as the old password");
        }

        // Hash the new password before saving
        user.password = await bcrypt.hash(newPassword, 10); // Hash with a salt rounds of 10
        await user.save(); // Save the updated user document

        messageHandler(res, 200, "Password updated successfully");
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'An error occurred. Please try again later.' });
    }
};

export default handler;
