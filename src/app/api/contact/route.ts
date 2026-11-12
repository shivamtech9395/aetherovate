import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    if (!name || !company || !phone) {
      return NextResponse.json(
        { error: 'Name, Company, and Phone are required fields.' },
        { status: 400 }
      );
    }

    // Server-side lead processing simulation
    const leadId = `AETH-${Date.now().toString(36).toUpperCase()}`;

    console.log('[LEAD RECEIVED]', { leadId, name, company, phone, email, service, message });

    return NextResponse.json({
      success: true,
      leadId,
      message: 'Your project inquiry has been queued for architect review.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error while submitting inquiry.' },
      { status: 500 }
    );
  }
}
