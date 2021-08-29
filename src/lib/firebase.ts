import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, query, DocumentData, 
  orderBy, addDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Content } from "@/types";
import dayjs from 'dayjs';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

export const initFirebaseApp = () => {
  getApps().length ? getApp() : initializeApp(firebaseConfig);
};

initFirebaseApp();

const auth = getAuth();

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    switch(error.code) {
      case "auth/invalid-email":
        error.message = "メールアドレスが間違っています。";
        break;
      case "auth/wrong-password":
        error.message = "パスワードが間違っています。";
        break;
      case "auth/user-not-found":
        error.message = "メールアドレスまたはパスワードが間違っています。";
        break;
      default:
        error.message = "認証に失敗しました。";
        break;  
    }
    return error;

  }
};

export const logOutDefault = async () =>{
  try {
    const result = await signOut(auth);
    return result;

  } catch (error) {
    return error;

  }
}

export const getLoginUser = () => {
  if(auth.currentUser) return auth.currentUser;
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      resolve(user);
      unsubscribe();
    });
  });
};


const db = getFirestore();
const contentsCollection = collection(db, "contents");

export const getContents = async () => {
  const result: DocumentData[] = [];
  const querySnapshot = await getDocs(query(contentsCollection, orderBy("createdAt", "desc")));
  querySnapshot.forEach((doc) => {
    let content = doc.data();
    content.id = doc.id;
    content.updatedAt = dayjs(content.updatedAt.toDate()).format("YYYY/MM/DD");
    result.push(content);
  });

  return result;
};

export const getContent = async (id: string) => {
  const docRef = doc(db, "contents", id);
  const docSnapshot = await getDoc(docRef);
  if(docSnapshot.exists()){
    let content = docSnapshot.data();
    content.id = docSnapshot.id;
    return content;
  }
}

export const addContent = async (content: Partial<Content>) => {
  if(!auth.currentUser) return;
  const user = auth.currentUser;
  const currentDateTime = new Date();
  if(content.id) {
    content.updatedBy = user.uid;
    content.updatedAt = currentDateTime;
    const docRef = doc(db, "contents", content.id);
    await updateDoc(docRef, content);
  } else {
    content.createdBy = user.uid;
    content.createdAt = currentDateTime;
    content.updatedBy = user.uid;
    content.updatedAt = currentDateTime;
    await addDoc(contentsCollection, content);
  }
}

export const deleteContent = async (contentId: string) => {
  await deleteDoc(doc(db, "contents", contentId))
}