const firebaseConfig = {
    apiKey: "AIzaSyCyejax_SDxSgQpbvUE9lLMlGFWu6hSTI0",
    authDomain: "kwitter-40bb3.firebaseapp.com",
    databaseURL: "https://kwitter-40bb3-default-rtdb.firebaseio.com",
    projectId: "kwitter-40bb3",
    storageBucket: "kwitter-40bb3.appspot.com",
    messagingSenderId: "549949307102",
    appId: "1:549949307102:web:f053d586741c3dc128ea4f"
  };
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
{
    childKey  = childSnapshot.key;
    Room_names = childKey;
});});}
getData();

function logout()
{
window.location="index.html";
}

function login_button()
{
window.location="kwitter_room.html";
}