const firebaseConfig = {
    apiKey: "AIzaSyC1Slw1KG-TWrfUhCrv4WnhvU7gsNUYNPI",
    authDomain: "class-test-56f40.firebaseapp.com",
    databaseURL: "https://class-test-56f40-default-rtdb.firebaseio.com",
    projectId: "class-test-56f40",
    storageBucket: "class-test-56f40.appspot.com",
    messagingSenderId: "116367925159",
    appId: "1:116367925159:web:015efbd260f3eadaa92082",
    measurementId: "G-D2Q9VY2CWH" 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function add_room(){
    user_name=document.getElementById("room_name").value;
    localStorage.setItem("roomname",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
