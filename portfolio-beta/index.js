
//Dark Mode
let darkMode = localStorage.getItem("darkMode");
const darktoggle = document.querySelector(".theme-wrap");

const enableDarkMode = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enable");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
}

function changeIcon() {
    const icon = document.querySelector("#icon");
    if(icon.className == "fa-solid fa-moon"){
        icon.className = ("fa-solid fa-sun");
    }else{
        icon.className = ("fa-solid fa-moon");
    }
}

if(darkMode === "enable"){
    enableDarkMode(); 
    changeIcon();
}

 
darktoggle.addEventListener('click', ()=>{
    darkMode = localStorage.getItem("darkMode");
    changeIcon();
    if(darkMode !== "enable"){
        enableDarkMode();
    }else{
        disableDarkMode();
      }
})




//Eye
const eye = document.getElementById('eye');
const password = document.getElementById('password');

eye.addEventListener('click', () =>{
    if(eye.className == 'fa-solid fa-eye'){
        eye.className = ('fa-solid fa-eye-slash');
        password.type = 'text';
    }else{
        eye.className = ('fa-solid fa-eye');
        password.type = 'password';

    }
})

//Modal
const openButton = document.querySelector("[open-button]")
const closeButton = document.querySelector("[close-button]")
const modal = document.querySelector(".modal")

openButton.addEventListener("click", () =>{
    modal.showModal();
})

closeButton.addEventListener("click", () =>{
    modal.close();
})


//Password
const drive = document.getElementsByClassName("drive-icon")[0];
const warning = document.getElementById("result")
const submit = document.querySelector("[submit-button]")
const key = "julesgwapo"
submit.addEventListener('click',() =>{
    if(password.value===key){
        drive.style.display = "block";
        modal.close();
    }else{
        warning.innerHTML = "Wrong Password";
    }
})










