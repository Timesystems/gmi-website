import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return Response.json({ message: `System OK` });
}

export async function POST(request: NextRequest) {
  try {
    console.log(request.json());
  } catch (e) {
    console.error(`Something went wrong. Reason: ${e}`);
  }

  return Response.json({
    message: `We've received your form. Thank you!`,
    status: true,
  });
}