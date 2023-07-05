// api/email.js
import * as MailComposer from 'expo-mail-composer';
var url1 = "http://maps.google.com/maps?&z=15&mrt=yp&t=k&q=";
export const sendEmail = (crashType) => {
  const emailSubject = crashType === 'Major' ? 'Major Crash Detected' : 'Minor Crash Detected';
  const emailBody = `A ${crashType.toLowerCase()} crash has been detected.\nPlease take appropriate action.\n \n Coordinates: \n Latitude ${window.Latitude} \n Longitude: ${window.Longitude} \n TimeTaken: ${window.TimeTakens}`;

  const emailConfig = {
    subject: emailSubject,
    body: emailBody,
    isHtml: false,
    recipients: ['renzlaurennn@gmail.com'], // Replace with the recipient's email address
    ccRecipients: [],
    bccRecipients: [],
    attachments: [],
  };

  return MailComposer.composeAsync(emailConfig);

};