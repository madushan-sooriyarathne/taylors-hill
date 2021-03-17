const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp configs
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER_PREFIX as string,
});

async function addContact(
  email: string,
  firstName?: string,
  lastName?: string,
  phone?: string
): Promise<void> {
  const listId: string = process.env.MAILCHIMP_LIST_ID as string;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
      },
    });

    console.log(`user subscribed (${response.id})`);
  } catch (error: any) {
    console.error(
      `Error occurred while subscribing the user - ${error.message}`
    );
  }
}

export { addContact };
