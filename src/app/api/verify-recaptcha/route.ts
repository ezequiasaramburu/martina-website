import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: 'reCAPTCHA secret key is missing' }, 
        { status: 500 }
      );
    }

    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: 'POST' }
    );

    const verificationData = await verificationResponse.json();

    if (verificationData.success && verificationData.score > 0.5) {
      return NextResponse.json({ success: true, score: verificationData.score });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA verification failed',
          details: verificationData 
        }, 
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error during reCAPTCHA verification' }, 
      { status: 500 }
    );
  }
}

// Ensure this route can handle OPTIONS preflight requests
export async function OPTIONS() {
  return NextResponse.json({ success: true }, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
} 