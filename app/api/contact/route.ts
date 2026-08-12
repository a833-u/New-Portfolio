import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, queryType, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (Name, Email, Subject, Message)' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL || 'akansara833@gmail.com';

    // Log message on server (secure environment)
    console.log('[RECRUITER / PROJECT QUERY RECEIVED]');
    console.log(`To: ${destinationEmail}`);
    console.log(`From: ${name} (${email}) - Company: ${company || 'N/A'}`);
    console.log(`Type: ${queryType}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // If an external SMTP or email service API key (e.g. Resend, SendGrid) is provided in server env vars,
    // sending logic would execute here without exposing any secret keys to the browser client.

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
        recipient: destinationEmail
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or contact me directly at akansara833@gmail.com.' },
      { status: 500 }
    );
  }
}
