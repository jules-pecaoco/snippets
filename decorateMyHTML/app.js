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

const message = document.getElementById("message");
const username = document.getElementById("nickname");
const button = document.getElementById("sub");
const pub = document.getElementById("public");
const pri = document.getElementById("private");

button.addEventListener("click", function () {
  writeMessage();
  location.reload();
});

function writeMessage() {
  if (message.value == "" || username.value == "") {
    alert("Please fill all the fields");
    return;
  } else {
    var show = true;
    if (pri.checked) {
      show = false;
    }
    set(ref(db, "Message/" + username.value), {
      message: message.value,
      username: username.value,
      show: show,
    })
      .then(() => {
        alert("Message sent!");
        location.reload();
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
}

// Colors
const colors = ["#dc3545", "#28a745", "#ffc107", "#ffffff", "#6c757d"];

// Get Data
function displayData() {
  const dataRef = ref(db);
  var i = 0;
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
          element.style.backgroundColor = colors[i++ % colors.length];
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
  startMusic(false);
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
};

nextPage.onclick = function () {
  mainPage.style.display = "none";
  addDeco.style.display = "block";
};

parent.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("from")) {
    card.style.display = "block";
    startMusic(true);
    const color = clickedElement.style.backgroundColor;
    displayCard(clickedElement.textContent, color);
  }
});

// Play Music
function startMusic(bool) {
  const audioPlayer = document.getElementById("audioP");
  const startTimeInSeconds = 40;
  audioPlayer.currentTime = startTimeInSeconds;
  if (bool) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// Display Card
function displayCard(username, color) {
  const dataRef = ref(db);

  get(child(dataRef, "Message/" + username))
    .then((snapshot) => {
      if (snapshot.exists()) {
        msgD.parentNode.style.backgroundColor = color;
        const show = snapshot.val().show;
        if (show) {
          msgD.textContent = snapshot.val().message;
        } else {
          msgD.textContent = "Message is Private till Christmas🎁/till I code so🙃";
        }
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
