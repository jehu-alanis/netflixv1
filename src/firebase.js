import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUKYQWhepi2hQ_EKYhKxRIqXPR6MBFhjA",
    authDomain: "netflix-jao.firebaseapp.com",
    projectId: "netflix-jao",
    storageBucket: "netflix-jao.appspot.com",
    messagingSenderId: "223068523353",
    appId: "1:223068523353:web:20456785ff82a7e2de1a48"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();

  export {auth}