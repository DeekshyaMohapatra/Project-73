import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyD0MMy9gKua2uaSfVzRXMyEETL89eorZB8",

  authDomain: "project-73-5094c.firebaseapp.com",

  projectId: "project-73-5094c",

  storageBucket: "project-73-5094c.appspot.com",

  messagingSenderId: "882270382376",

  appId: "1:882270382376:web:56d4fa2dd8aa077081481d"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

