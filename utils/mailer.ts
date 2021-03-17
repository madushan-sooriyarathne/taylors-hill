import nodemailer from "nodemailer";

interface EmailObj {
  from: string;
  to: string;
  subject: string;
  html: string;
}

// create email transporter
const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: parseInt(process.env.EMAIL_PORT as string),
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_ADDRESS as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

const generateEmailObj = (emailData: InquiryData): EmailObj => {
  return {
    from: `"Taylors Hill Email Admin 🖥" <${emailData.email}>`,
    to: `sales@taylorshill.lk, marketing@taylorshill.lk, reservations@taylorshill.lk`,
    subject: "New Inquiry | Taylors Hill ✉️",
    html: `
        <p>New inquiry submitted to taylorshill.lk. Please reply ASAP.</p>
        <br>
        <p><span style="background-color: #ff9900;">Name:</span> ${
          emailData.firstName
        } ${emailData.lastName}</p>
        <p><span style="background-color: #ff9900;">Email:</span> ${
          emailData.email
        }</p>
        <p><span style="background-color: #ff9900;">Phone:</span> ${
          emailData.phone || "Not specified"
        }</p>
        <p><span style="background-color: #ff9900;">Message:</span> ${
          emailData.message || "Not specified"
        }</p>
        <br>
        <p>Cheers.</p>`,
  };
};

const sendEmail = async (emailData: InquiryData): Promise<boolean> => {
  const mailObj = generateEmailObj(emailData);

  try {
    const result = await transport.sendMail(mailObj);

    console.log(`Message sent (${result.messageId})`);
    return true;
  } catch (error: any) {
    console.error(`Error occurred while sending the email - ${error.message}`);
    return false;
  }
};

export { sendEmail };
