const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp configs
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER_PREFIX as string,
});

async function addContact(contact: MailchimpContact): Promise<boolean> {
  const listId: string = process.env.MAILCHIMP_LIST_ID as string;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: contact.email,
      status: "subscribed",
      merge_fields: {
        FNAME: contact.firstName,
        LNAME: contact.lastName,
        PHONE: contact.phone,
      },
    });

    console.log(`user subscribed (${response.id})`);
    return true;
  } catch (error: any) {
    console.error(
      `Error occurred while subscribing the user - ${error.message}`
    );
    return false;
  }
}

export { addContact };
