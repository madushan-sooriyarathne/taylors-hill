import { NextApiRequest, NextApiResponse } from "next";
import { addContact } from "../../utils/mailchimp";
import { sendEmail } from "../../utils/mailer";

type ResponseBody = {
  status: string;
  message?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
): Promise<void> => {
  // check the method
  if (req.method !== "POST") {
    res.status(405).json({
      status: "failed",
      message: `${req.method} method is not allowed in this route`,
    });
    return;
  }

  const inquiryData: InquiryData = { ...req.body };

  // check request body fields
  if (!inquiryData.email || !inquiryData.firstName || !inquiryData.lastName) {
    res.status(400).json({
      status: "failed",
      message: "Some required fields are missing in the HTTP request",
    });
    return;
  }

  // send the email
  const status: boolean = await sendEmail(inquiryData);

  // subscribe to newsletter
  // output from this will simply discarded as subscribing the user is optional here
  await addContact(inquiryData);

  if (status) {
    res.status(200).json({
      status: "success",
    });
    return;
  } else {
    res.status(500).json({
      status: "failed",
      message: "Error occurred while submitting the the details",
    });
    return;
  }
};
