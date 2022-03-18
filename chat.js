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

    function logout_web(){
        window.location = "index.html";
        localStorage.removeItem("Room");
        localStorage.removeItem("Name");
      }

sender_name = localStorage.getItem("Name");
room_name = localStorage.getItem("Room");

function send_msg(){
    message = document.getElementById("msg_send_input").value;


if(message == ""){
window.alert("Please Enter A Message");
}

else{
    firebase.database().ref(room_name).push({
        Sender_Name : sender_name,
        Message : message ,
        Likes : 0
    });
    
    document.getElementById("msg_send_input").value = "";
}

}

function getData() { 
    firebase.database().ref("/" + room_name).on('value', function(snapshot) 
    { 
      document.getElementById("msg_display").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { 
      childKey = childSnapshot.key; 
      childMsg = childSnapshot.val();

      if (childKey != "Key")
      {
message_id = childKey;
message_details = childMsg;


console.log(message_id);
console.log(message_details);

Username = message_details['Sender_Name'];
Message = message_details['Message'];
Likes = message_details['Likes'];

Username_display = "<h3 id= 'username'>" + Username + "<img src='icons8-tick-64.png' class='tick_img'></h3>";
Message_display = "<h4>" + Message + "</h4>";
Likes_display = "<button class='btn btn-warning' id ="+message_id+" value =" + Likes + "onclick = 'sending_likes_update(this.id)'>";
button = "<span class='glyphicon glyphicon-thumbs-up'>Like:- " + Likes + "</span></button><hr>";
row = Likes_display + button;
final_output = Username_display  +  Message_display + row;
document.getElementById("msg_display").innerHTML += final_output;
      }


  
    });
   });
   }

   getData();
  
function sending_likes_update(message_id){

button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1;
 console.log(updated_likes); 
 firebase.database().ref(room_name).child(message_id).update({ 
   Likes : updated_likes 

});


   }

  