const firebaseConfig = {
  apiKey: "AIzaSyASUzvIf4nao7KvICeW7oknKr_B4nljL9k",
  authDomain: "clase-100-3605e.firebaseapp.com",
  databaseURL: "https://clase-100-3605e-default-rtdb.firebaseio.com",
  projectId: "clase-100-3605e",
  storageBucket: "clase-100-3605e.appspot.com",
  messagingSenderId: "1052113684808",
  appId: "1:1052113684808:web:f06a6ad707ee2ceb9a8b7d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


