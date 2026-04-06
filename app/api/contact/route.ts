import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/services/contact';
import { contactSchema } from '@/lib/validation/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const inquiry = await ContactService.createInquiry(validatedData);

    return NextResponse.json({
      message: 'Inquiry submitted successfully',
      inquiry: {
        id: inquiry.id,
        status: inquiry.status,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
  }
}