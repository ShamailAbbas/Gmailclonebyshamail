import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDBPkiTDPsJ7Zuk2w1TtINtJG-JU2tKraw',
  authDomain: 'whatsappclone-e19a1.firebaseapp.com',
  databaseURL: 'https://whatsappclone-e19a1-default-rtdb.firebaseio.com',
  projectId: 'whatsappclone-e19a1',
  storageBucket: 'whatsappclone-e19a1.appspot.com',
  messagingSenderId: '51964871385',
  appId: '1:51964871385:web:dfc1c34584a4ce13de34c8',
  measurementId: 'G-ZV5J0L2FXY',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
