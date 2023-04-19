import { CourierClient } from "@trycourier/courier";

type InquiryNotificationData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
};

const courier = CourierClient({
  authorizationToken: process.env.COURIER_AUTH_TOKEN,
});

const sendInquiryNotification = async (data: InquiryNotificationData) => {
  const adminNotificationResponse = await courier.send({
    message: {
      to: [
        {
          email: "reservations@taylorshill.lk",
        },
        {
          email: "reservations@theserendipitycollection.com",
        },
      ],

      template: "6J9TKAJWFD4JHKMF6GP8N6DWJ7V7",
      data: {
        ...data,
        message: data.message || "Not Provided",
      },
    },
  });

  const userResponse = await courier.send({
    message: {
      to: {
        email: data.email,
      },
      template: "ND7EW34PZTMPY0GKHG3QERHV77H0",
      data: {
        firstName: data.firstName,
      },
    },
  });

  if (adminNotificationResponse.requestId) {
    return true;
  }
  return false;
};

export { sendInquiryNotification };
