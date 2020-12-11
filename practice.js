var firebaseConfig = {
    apiKey: "AIzaSyA1HguA2UcstyqjGRmSxO8_6va0k9wZCvc",
    authDomain: "kwitter-2dd7f.firebaseapp.com",
    databaseURL: "https://kwitter-2dd7f-default-rtdb.firebaseio.com",
    projectId: "kwitter-2dd7f",
    storageBucket: "kwitter-2dd7f.appspot.com",
    messagingSenderId: "662540088057",
    appId: "1:662540088057:web:15543b94f2a18a46b8e828"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function addUser()
 {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update
    ({
        purpose:"adding user"
    });
}