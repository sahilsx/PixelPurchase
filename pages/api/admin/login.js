import connection from "../../../utils/condb";
import messageHandler from "../../../utils/feature";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import Admin from "../../../models/adminmodels"; // Make sure to import your Admin model

require("dotenv").config();

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return messageHandler(res, 400, "All Credentials Required!");
    }

    await connection();

    // Check if there are any existing admin users
    const adminCount = await Admin.countDocuments();

    // If no admin user exists, seed one
    if (adminCount === 0) {
      const adminData = {
        email: "itxsaaho@gmail.com",
        password: await bcrypt.hash("herewego@123", 10),
        // You can add more fields as required by your Admin model
      };

      // Create the admin user
      const newAdmin = await Admin.create(adminData);

      // Set user to the newly created admin
      
    } else {
      // Find admin user by email
      let user = await Admin.findOne({ email });

      if (!user) {
        return messageHandler(res, 400, "No User Found!");
      }

      const comparepass = await bcrypt.compare(password, user.password);

      if (!comparepass) {
        return messageHandler(res, 400, "Incorrect Password!");
      }
    }

    // Generate JWT token
    const token = await jwt.sign({ userId: Admin._id }, "mylatimlamangaranchu");

    // Set token in a cookie
    if (token) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: "strict",
          path: "/", // Set the cookie path to root
        })
      );

      return res.status(200).json({ message: "Logged in successfully", token });
    }

  } catch (error) {
    console.log(error);
    // Handle other errors here
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
