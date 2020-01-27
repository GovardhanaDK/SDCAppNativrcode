import Firebase from 'firebase'; 
let config = {
    apiKey: "AIzaSyBCXsGvvSyTiq-_8fFw7YFcX3DwEATLlbQ",
    authDomain: "testt-88b06.firebaseapp.com",
    databaseURL: "https://testt-88b06.firebaseio.com",
    projectId: "testt-88b06",
    storageBucket: "testt-88b06.appspot.com",
    messagingSenderId: "793947010192",
    appId: "1:793947010192:android:5918b5e497fd4117861415",
    // measurementId: "G-JNH1MQD3TB"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();