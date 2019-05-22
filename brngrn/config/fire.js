import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCwJs4c90oI5bS3NTgSIct6-yxD8ZOWUa0",
    authDomain: "brngrn-e79ec.firebaseapp.com",
    databaseURL: "https://brngrn-e79ec.firebaseio.com",
    projectId: "brngrn-e79ec",
    storageBucket: "brngrn-e79ec.appspot.com",
    messagingSenderId: "29891957673",
    appId: "1:29891957673:web:69da2d42df2ff774"
};
const fire = firebase.initializeApp(config);
export default fire;