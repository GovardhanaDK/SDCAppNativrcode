
import Firebase from 'firebase'; 
let config = {
    apiKey: "AIzaSyDA49CEoaKlUnMhRKBobY0JG1cQlk4gyfk",
    authDomain: "sdc-wearable.firebaseapp.com",
    databaseURL: "https://sdc-wearable.firebaseio.com",
    projectId: "sdc-wearable",
    storageBucket: "sdc-wearable.appspot.com",
    messagingSenderId: "571561508412",
    appId: "1:571561508412:web:ce36000a728d7e8f81cd39",
    measurementId: "G-JNH1MQD3TB"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();