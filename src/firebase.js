import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDzKtbvwTLVEWniEhAYGnovtOanJYwEmF8",
  authDomain: "library-management-syste-aaa9d.firebaseapp.com",
  projectId: "library-management-syste-aaa9d",
  storageBucket: "library-management-syste-aaa9d.appspot.com",
  messagingSenderId: "861895141784",
  appId: "1:861895141784:web:1e482ace1d446b13a5e3ed",
  measurementId: "G-502KT0FSQS"
})



export const auth = app.auth()
export default app