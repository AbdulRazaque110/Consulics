import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/services/contact';

export async function GET() {
  try {
    const inquiries = await ContactService.getInquiries();
    return NextResponse.json({ inquiries });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    await ContactService.updateInquiryStatus(id, status);
    return NextResponse.json({ message: 'Inquiry status updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update inquiry status' }, { status: 500 });
  }
}