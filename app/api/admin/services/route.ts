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

// PUT /api/admin/services/[id]
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const validatedData = serviceSchema.partial().parse(body);

    await ServicesService.updateService(params.id, validatedData);
    return NextResponse.json({ message: 'Service updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

// DELETE /api/admin/services/[id]
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await ServicesService.deleteService(params.id);
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}