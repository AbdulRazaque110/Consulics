import { NextRequest, NextResponse } from 'next/server';
import { verifyUser } from '@/lib/verify-token';
import { adminDb } from '@/lib/firebase-admin';

export async function PUT(request: NextRequest) {
  try {
    const user = await verifyUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { firstName, lastName, phone } = body;

    const name = `${firstName} ${lastName}`.trim();

    await adminDb.collection('users').doc(user.uid).update({
      name,
      phone: phone || null,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true, name, phone });
  } catch (error: any) {
    console.error('Update profile error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}