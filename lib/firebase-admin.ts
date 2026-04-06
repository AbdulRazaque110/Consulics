import * as admin from 'firebase-admin';

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const hasAdminCredentials = Boolean(
  firebaseAdminConfig.projectId &&
  firebaseAdminConfig.privateKey &&
  firebaseAdminConfig.clientEmail
);

if (!admin.apps.length && hasAdminCredentials) {
  const serviceAccount = {
    project_id: firebaseAdminConfig.projectId,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: firebaseAdminConfig.privateKey,
    client_email: firebaseAdminConfig.clientEmail,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  } as any;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${firebaseAdminConfig.projectId}.firebaseio.com`,
  });
}

const app = admin.apps.length ? admin.app() : null;

export const auth = app ? admin.auth() : null;
export const db = app ? admin.firestore() : null;
export const storage = app ? admin.storage() : null;

export default admin;