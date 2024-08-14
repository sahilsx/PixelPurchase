import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: "false",
    auth: {
      user: "itxsaaho@gmail.com",
      pass: "guvf qmgd giqy qbcs",
    },
  });


const handler = async (req,res)=>{
  try {
    const { email } = req.body; // u can take answer of the security question for further validation
    

    const mailOptions = {
      from: "itxsaaho@gmail.com",
      to: `${email}`,
      subject: "PIXELPURCHASE",
      text: "HURRAY! your order is arriving today 4pm so don,t miss out ",
    };

     await transporter.sendMail(mailOptions);

    

      res.json({ message: "mail has been sent successfully!" });

        // security Question  validation here
        // redirection to the new page in which new password can be saved
      
   
  } catch (error) {
    console.log(error);
  }
};

export default handler;