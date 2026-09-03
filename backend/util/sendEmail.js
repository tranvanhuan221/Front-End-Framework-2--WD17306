import nodemailer  from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'son01247662388@gmail.com',// tài khoản của mình
      pass: 'ildsabobxdxzyzio' // mật khẩu của mình 01247662388
    }
  });
  transporter.verify((error , success)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Ready for message");
        console.log(success);
    }
  });
  const sendEmail = async(mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions);
        return;
    } catch (error) {
        
    }
  }
  export default sendEmail;