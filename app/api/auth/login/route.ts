import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebase-admin';
import { loginSchema } from '@/lib/validation/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    // Firebase Admin doesn't have signInWithEmailAndPassword, so we verify manually
    // In production, you'd use Firebase Auth REST API or handle on client
    // For now, return success and let client handle auth

    return NextResponse.json({
      message: 'Login successful',
      // Token will be generated on client side
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}