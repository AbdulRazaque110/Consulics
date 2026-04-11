import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminDashboard from '@/components/admin/AdminDashboard';
import { adminAuth } from '@/lib/firebase-admin';
import { adminDb } from '@/lib/firebase-admin';

export default async function AdminPage() {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;

  if (!session) {
    redirect('/login');
  }

  try {
    const decoded = await adminAuth.verifySessionCookie(session!, false);
    const userDoc = await adminDb.collection('users').doc(decoded.uid).get();
    const userData = userDoc.data();
    
    console.log('AdminPage: decoded uid:', decoded.uid);
    console.log('AdminPage: user role:', userData?.role);
    
    if (!userData || userData.role !== 'admin') {
      redirect('/login');
    }
  } catch (error) {
    console.log('AdminPage: error:', error);
    redirect('/login');
  }

  return <AdminDashboard />;
}