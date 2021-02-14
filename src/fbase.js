import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장

// 필요한 곳에서 사용할 수 있도록 내보내기
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
