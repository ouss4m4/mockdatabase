import { firestore } from 'firebase-admin';

import { initializeApp } from 'firebase-admin';
initializeApp();
export const db: firestore.Firestore = firestore();
