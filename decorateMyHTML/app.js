// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_k-awBALRZEs7zgjjPHU1vYBtCdDu2BI",
  authDomain: "decoratemyhtml.firebaseapp.com",
  projectId: "decoratemyhtml",
  storageBucket: "decoratemyhtml.appspot.com",
  messagingSenderId: "171104930824",
  appId: "1:171104930824:web:30837a8b1c0f0af95fd5bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

var message = document.getElementById("message");
var username = document.getElementById("nickname");
var button = document.getElementById("sub");

button.addEventListener("click", function () {
  writeMessage();
  location.reload();
});

function writeMessage() {
  set(ref(db, "Message/" + username.value), {
    message: message.value,
    username: username.value,
  })
    .then(() => {
      alert("Message sent!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

function displayData() {
  const dataRef = ref(db);
  get(child(dataRef, "Message/")).then((snapshot) => {
    const data = snapshot.val();
    if(data){
      Object.keys(data).forEach((key) => {
        const item = data[key];
        const element = document.createElement("div");
        element.textContent = `Message: ${item.message} Username: ${item.username}`;
        document.body.appendChild(element);
      });
    }else {
      console.log("No data found");
    }
  }).catch((error) => {
    alert("Error: " + error.message);
  }).then(() => {
    alert("Data displayed successfully");
  });
}

// Call the function to display data
displayData();
