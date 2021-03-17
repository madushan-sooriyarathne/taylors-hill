import type { NextApiRequest, NextApiResponse } from "next";
import { addContact } from "../../utils/mailchimp";

type ResponseBody = {
  status: string;
  message?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
): Promise<void> => {
  const contactData: MailchimpContact = { ...req.body };

  // check the http method
  if (req.method !== "POST") {
    res.status(405).json({
      status: "failed",
      message: `${req.method} is not allowed`,
    });
    return;
  }

  // if email field is not preset in request body send failed response
  if (!contactData.email) {
    res.status(400).json({
      status: "failed",
      message: "email field is missing in the request body",
    });
    return;
  }

  const status: boolean = await addContact(contactData);

  if (status) {
    res.status(200).json({ status: "success" });
    return;
  } else {
    res.status(500).json({
      status: "failed",
      message: "error occurred while subscribing the user",
    });
    return;
  }
};
