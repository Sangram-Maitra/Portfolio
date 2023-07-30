import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  //   const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  //   const postUrl = process.env.REACT_APP_MAILCHIMP_FULL_URL;
  const postUrl =
    "https://gmail.us10.list-manage.com/subscribe/post?u=0df88c9400ad90e54fe84cfbb&amp;id=a1e2c32d0d&amp;f_id=00a4d8e5f0";
  console.log("The Post url:" + postUrl);
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
