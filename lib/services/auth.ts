import { auth, db } from '@/lib/firebase-admin';
import { UserRecord } from 'firebase-admin/auth';

function ensureAuth() {
  if (!auth) {
    throw new Error('Firebase admin is not initialized.');
  }
  return auth;
}

function ensureDb() {
  if (!db) {
    throw new Error('Firebase admin is not initialized.');
  }
  return db;
}

export interface AuthUser {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export class AuthService {
  static async createUser(email: string, password: string, firstName: string, lastName: string): Promise<AuthUser> {
    if (!auth) {
      throw new Error('Firebase admin is not initialized.');
    }

    const adminAuth = ensureAuth();
    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    // Store additional user data in Firestore
    const userData = {
      uid: userRecord.uid,
      email,
      firstName,
      lastName,
      role: 'user' as const,
      createdAt: new Date(),
    };

    const firestore = ensureDb();
    await firestore.collection('users').doc(userRecord.uid).set(userData);

    return {
      ...userData,
      createdAt: userData.createdAt,
    };
  }

  static async getUser(uid: string): Promise<AuthUser | null> {
    const firestore = ensureDb();
    const userDoc = await firestore.collection('users').doc(uid).get();
    if (!userDoc.exists) return null;

    const data = userDoc.data();
    return {
      uid: data!.uid,
      email: data!.email,
      firstName: data!.firstName,
      lastName: data!.lastName,
      role: data!.role,
      createdAt: data!.createdAt.toDate(),
    };
  }

  static async verifyToken(token: string): Promise<AuthUser | null> {
    if (!auth) {
      return null;
    }

    try {
      const decodedToken = await auth.verifyIdToken(token);
      return await this.getUser(decodedToken.uid);
    } catch (error) {
      return null;
    }
  }

  static async updateUser(uid: string, updates: Partial<Pick<AuthUser, 'firstName' | 'lastName'>>): Promise<void> {
    const firestore = ensureDb();
    await firestore.collection('users').doc(uid).update({
      ...updates,
      updatedAt: new Date(),
    });
  }
}