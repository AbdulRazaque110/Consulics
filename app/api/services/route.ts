import { NextRequest, NextResponse } from 'next/server';
import { ServicesService } from '@/lib/services/services';
import { serviceSchema } from '@/lib/validation/schemas';

export async function GET() {
  try {
    const services = await ServicesService.getAllServices();
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = serviceSchema.parse(body);

    const service = await ServicesService.createService(validatedData);
    return NextResponse.json({ service });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}