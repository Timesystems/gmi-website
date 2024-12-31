import { type NextRequest } from 'next/server';
const axios = require('axios');

const apiRequest = axios.create({
  baseURL: process.env.API_URL,
});

export async function POST(request: NextRequest) {
  let message = `We've received your message and will get back to you soon.`;
  try {
    const payload = await request.json();

    switch (payload?.type) {
      case `call`:
        await apiRequest.post(
          `/form-submission/request-call`,
          payload.data || {}
        );
        message = `We've received your call request. Please stay close for our call.`;
        break;
      case `case`:
        await apiRequest.post(
          `/form-submission/report-case`,
          payload.data || {}
        );
        message = `Thank you for reporting your case. We are on it!`;
        break;

      case `message`:
        await apiRequest.post(
          `/form-submission/send-message`,
          payload.data || {}
        );
        message = `We've got your message. Thanks for dropping by!`;
        break;

      case `volunteer`:
        await apiRequest.post(`/form-submission/volunteer`, payload.data || {});
        message = `Thank you for you interest in joining us! We will get back to you soon.`;
        break;
      default:
        throw new Error(`Unable to handle your request. Server Error.`);
    }
  } catch (e) {
    console.error(`Something went wrong. Reason: ${e}`);
  }

  return Response.json({
    message,
    status: true,
  });
}
