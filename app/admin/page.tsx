import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { auth } from '@/lib/firebase-admin';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminPage() {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;

  if (!session) {
    redirect('/login');
  }

  if (!auth) {
    redirect('/login');
  }

  try {
    await auth.verifyIdToken(session);
  } catch (error) {
    redirect('/login');
  }

  return <AdminDashboard />;
}