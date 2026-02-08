
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup as firebaseSignInWithPopup, 
  signInWithEmailAndPassword as firebaseSignInWithEmail, 
  createUserWithEmailAndPassword as firebaseCreateUser, 
  updateProfile as firebaseUpdateProfile,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  signOut as firebaseSignOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "", 
  authDomain: "", 
  projectId: "", 
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const isConfigValid = firebaseConfig.apiKey && firebaseConfig.apiKey.length > 0;

let _auth: any = null;
let _googleProvider: any = null;

if (isConfigValid) {
  try {
    const app = initializeApp(firebaseConfig);
    _auth = getAuth(app);
    _googleProvider = new GoogleAuthProvider();
  } catch (e) {
    console.error("Firebase init failed:", e);
  }
}

// --- Mock Database & Auth Layer ---
const MOCK_SESSION_KEY = 'cenner_active_user';
const MOCK_DB_KEY = 'cenner_users';

const authListeners: Array<(user: any) => void> = [];

const notifyAuthChange = () => {
  const user = JSON.parse(localStorage.getItem(MOCK_SESSION_KEY) || 'null');
  authListeners.forEach(cb => cb(user));
};

const mockAuth = {
  get currentUser() {
    return JSON.parse(localStorage.getItem(MOCK_SESSION_KEY) || 'null');
  },
  onAuthStateChanged: (callback: (user: any) => void) => {
    authListeners.push(callback);
    callback(mockAuth.currentUser); // Initial check
    return () => {
      const idx = authListeners.indexOf(callback);
      if (idx > -1) authListeners.splice(idx, 1);
    };
  },
  signOut: async () => {
    localStorage.removeItem(MOCK_SESSION_KEY);
    notifyAuthChange();
    return Promise.resolve();
  }
};

export const auth = isConfigValid ? _auth : mockAuth;
export const googleProvider = _googleProvider;

export const signInWithPopup = async (authObj: any, provider: any) => {
  if (!isConfigValid) {
    const user = { 
      uid: 'mock-' + Date.now(),
      displayName: "Elite Designer", 
      email: "designer@cenner.io", 
      photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
      creatorStatus: 'none'
    };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(user));
    notifyAuthChange();
    return { user };
  }
  return firebaseSignInWithPopup(authObj, provider);
};

export const signInWithEmailAndPassword = async (authObj: any, email: string, pass: string) => {
  if (!isConfigValid) {
    const user = { uid: 'mock-' + Date.now(), email, displayName: email.split('@')[0], photoURL: null, creatorStatus: 'none' };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(user));
    notifyAuthChange();
    return { user };
  }
  return firebaseSignInWithEmail(authObj, email, pass);
};

export const createUserWithEmailAndPassword = async (authObj: any, email: string, pass: string) => {
  if (!isConfigValid) {
    const user = { uid: 'mock-' + Date.now(), email, displayName: email.split('@')[0], photoURL: null, creatorStatus: 'none' };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(user));
    notifyAuthChange();
    return { user };
  }
  return firebaseCreateUser(authObj, email, pass);
};

export const updateProfile = async (user: any, data: any) => {
  if (!isConfigValid) {
    const current = JSON.parse(localStorage.getItem(MOCK_SESSION_KEY) || '{}');
    const updated = { ...current, ...data };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(updated));
    notifyAuthChange();
    return Promise.resolve();
  }
  return firebaseUpdateProfile(user, data);
};

export const onAuthStateChanged = (authObj: any, callback: any) => {
  if (!authObj) return () => {};
  return authObj.onAuthStateChanged(callback);
};

export const signOut = (authObj: any) => {
  if (!authObj) return Promise.resolve();
  return authObj.signOut();
};
