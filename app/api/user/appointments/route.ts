import { NextRequest, NextResponse } from 'next/server';
import { verifyUser } from '@/lib/verify-token';
import { adminDb } from '@/lib/firebase-admin';

export async function GET(request: NextRequest) {
  try {
    const user = await verifyUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const snapshot = await adminDb
      .collection('appointments')
      .where('email', '==', user.email)
      .orderBy('appointmentDate', 'desc')
      .get();

    const appointments = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null,
    }));

    return NextResponse.json({ appointments });
  } catch (error: any) {
    console.error('User appointments error:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}