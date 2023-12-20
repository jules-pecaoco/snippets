import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

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

// Get Data

function displayData() {
  const dataRef = ref(db);
  get(child(dataRef, "Message/"))
    .then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        Object.keys(data).forEach((key) => {
          const item = data[key];
          const element = document.createElement("div");
          element.classList.add("from");
          const parent = document.getElementById("msgs");
          element.textContent = `${item.username}`;
          parent.appendChild(element);
        });
      } else {
        console.log("No data found");
      }
    })
    .catch((error) => {
      alert("Error: " + error.message);
    })
    .then(() => {
      // alert("Data displayed successfully");
    });
}

// Load Data @Initalization
displayData();


// DOM Elements
// Close Card
const close = document.getElementById("closeCard");
const card = document.getElementById("toggle");
close.addEventListener("click", () => {
  card.style.display = "none";
});

// Edit Card
const msgD = document.getElementById("messageDisplay");
const fromD = document.getElementById("nicknameDisplay");
const nextPage = document.getElementById("nextPage");
const mainPage = document.getElementById("mainPage");
const addDeco = document.getElementById("addDeco");
const backPage = document.getElementById("backPage");

backPage.onclick = function () {
  mainPage.style.display = "block";
  addDeco.style.display = "none";
}

nextPage.onclick = function () {
  mainPage.style.display = "none";
  addDeco.style.display = "block";
}


parent.addEventListener('click', function(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('from')) {
    card.style.display = "block";
    displayCard(clickedElement.textContent);
  }
});


function displayCard(username) {
  const dataRef = ref(db);

  get(child(dataRef, 'Message/' + username))
    .then((snapshot) => {
      if (snapshot.exists()) {
        msgD.textContent = snapshot.val().message;
        fromD.textContent = snapshot.val().username;
      } else {
        console.log("No data found");
      }
    })
    .catch((error) => {
      alert("Error: " + error.message);
    })
    .then(() => {
      // alert("Data displayed successfully");
    });
}


function rain() {
  
}