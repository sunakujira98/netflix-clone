import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// we need to somehow seed the database

// we need a config here

const config = {
  apiKey: "AIzaSyCvzDEAUhuAtlVBE6sTG0s-U5CHUqE4miU",
  authDomain: "netflix-87779.firebaseapp.com",
  projectId: "netflix-87779",
  storageBucket: "netflix-87779.appspot.com",
  messagingSenderId: "437842900461",
  appId: "1:437842900461:web:e1024639badbba2f7163e4"
}

const firebase =  Firebase.initializeApp(config)

export { firebase }