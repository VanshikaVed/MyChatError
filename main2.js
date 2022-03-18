var firebaseConfig = {
  apiKey: "AIzaSyAD7nOGr1WjBgSfRXoHVkxR4m4hDKONf_o",
  authDomain: "weshare-a8878.firebaseapp.com",
  databaseURL: "https://weshare-a8878-default-rtdb.firebaseio.com",
  projectId: "weshare-a8878",
  storageBucket: "weshare-a8878.appspot.com",
  messagingSenderId: "1025951774135",
  appId: "1:1025951774135:web:cea3728443bc2a5b33e432",
  measurementId: "G-X5ZWSRBYD9"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var name_1 = localStorage.getItem("Name");

document.getElementById("welcome_display").innerHTML = "Welcome  " + name_1 + " !";

function add_room(){

  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room" , room_name);
  firebase.database().ref("/").child(room_name).update({
    Key : "value"
  });
}

function logout_web(){
  window.location = "index.html";
  localStorage.removeItem("Room");
  localStorage.removeItem("Name");
}

function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
    document.getElementById("display_rooms").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { 
    childKey = childSnapshot.key; 
    all_room_names = childKey;

room_list = "<div class='list' id=" + all_room_names + " onclick='create_list(this.id)'> #" + all_room_names + "</div><hr>";

document.getElementById("display_rooms").innerHTML += room_list;

  });
 });
 }

getData();

function create_list(room_id)
{
  localStorage.setItem("Room" , room_id);
  window.location="chat.html";
}

